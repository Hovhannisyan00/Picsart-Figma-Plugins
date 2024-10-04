import React, { FormEvent, useEffect, ChangeEvent, useState } from "react";
import ReactDOM from "react-dom";
import "./ui.scss";

interface PluginMessage {
  type: string;
  apikey?: string;
  buffer?: ArrayBuffer;
}

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
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    parent.postMessage(
      {
        pluginMessage: { type: "saveApiKey", apiKey },
      },
      "*"
    );
  };

  useEffect(() => {
    const handleMessage = async (event: MessageEvent) => {
      const message: PluginMessage = event.data.pluginMessage;
      
      if (message.type === "key") {
        setApiKey(message.apikey || "");
      }

      if (message.type === "run") {
        try {
          const imageBinary = await getImageBinary(message.buffer); 

          const form = new FormData();
          form.append('upscale_factor', '8');
          form.append('format', 'JPG');
          form.append('image', imageBinary);

          fetch("https://api.picsart.io/tools/1.0/upscale", {
            method: "POST",
            headers: {
              "X-Picsart-API-Key": event.data.pluginMessage.apikey,
            },
            body: form,
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
    //     }
    //   }
    // };

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
        <button type="submit" disabled={isSubmitting}>Save</button>
      </div>
    </form>
  );
};

ReactDOM.render(<App />, document.getElementById("react-page"));
