import React, { FormEvent, useEffect, ChangeEvent, useState } from "react";
import ReactDOM from "react-dom";
import "./ui.scss";

const getImageBinary = (bytes: ArrayBuffer): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    try {
      const blob = new Blob([new Uint8Array(bytes)], { type: "image/jpeg" });
      const url = URL.createObjectURL(blob);

      const img = new Image();
      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve(blob);
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("Invalid image"));
      };

      img.src = url;
    } catch (e) {
      reject(e);
    }
  });
};

export const App: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    parent.postMessage(
      {
        pluginMessage: apiKey,
      },
      "*"
    );
  };

  useEffect(() => {
    const handleMessage = async (event: MessageEvent) => {
      if (event.data.pluginMessage.type === "key") {
        setApiKey(event.data.pluginMessage.apikey || "");
      }

      if (event.data.pluginMessage.type === "run") {
        try {
          const imageBinary = await getImageBinary(
            event.data.pluginMessage.buffer
          );

          const formData = new FormData();
          formData.append("size", "auto");
          formData.append("image", imageBinary);

          console.log("Feth go to networck");

          fetch("https://api.picsart.io/tools/1.0/removebg", {
            method: "POST",
            headers: {
              "X-Picsart-API-Key": event.data.pluginMessage.apikey,
            },
            body: formData,
          })
            .then((response) => response.json())
            .then((res) => {
              return fetch(res.data.url);
            })
            .then((imageResponse) => {
              return imageResponse.blob();
            })
            .then((blob) => {
              return blob.arrayBuffer();
            })
            .then((arrayBuffer) => {
              const uint8Array = new Uint8Array(arrayBuffer);
              parent.postMessage(
                {
                  pluginMessage: {
                    uint8Array,
                  },
                },
                "*"
              );
            })
            .catch((error) => {
              console.error("Error fetching the image:", error);
            });
        } catch (error) {
          console.error("Error removing background:", error);
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  return (
    <form onSubmit={handleSubmit} id="setApiKey">
      <div className="row">
        <input
          type="text"
          placeholder="Api Key"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setApiKey(event.target.value)
          }
          value={apiKey}
        />
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

ReactDOM.render(<App />, document.getElementById("react-page"));
