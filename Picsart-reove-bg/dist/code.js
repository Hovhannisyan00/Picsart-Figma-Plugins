/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/***/ (function() {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
if (figma.command == "removebgfunc") {
    function checkFill(fill, apiKey) {
        return __awaiter(this, void 0, void 0, function* () {
            if (fill.type === "IMAGE") {
                figma.showUI(__html__, { visible: false });
                const image = figma.getImageByHash(fill.imageHash);
                const bytes = yield image.getBytesAsync();
                figma.ui.postMessage({
                    type: "run",
                    buffer: bytes.buffer,
                    apikey: apiKey,
                });
                const response = yield new Promise((resolve, reject) => {
                    figma.ui.onmessage = (res) => {
                        if (typeof res["errors"] !== "undefined" &&
                            Array.isArray(res["errors"]) &&
                            res["errors"].length > 0) {
                            figma.closePlugin(res["errors"][0].title);
                        }
                        else {
                            resolve(res);
                        }
                    };
                });
                const newImageFill = JSON.parse(JSON.stringify(fill));
                newImageFill.imageHash = figma.createImage(response.uint8Array).hash;
                return {
                    fill: newImageFill,
                    credits: response.credits,
                    updated: true,
                };
            }
            return {
                fill: fill,
                updated: false,
            };
        });
    }
    function removeBG(node, apiKey) {
        return __awaiter(this, void 0, void 0, function* () {
            let types = ["RECTANGLE", "ELLIPSE", "POLYGON", "STAR", "VECTOR", "TEXT"];
            if (types.indexOf(node.type) > -1) {
                let newFills = [], updated = false, check;
                for (const fill of node.fills) {
                    check = yield checkFill(fill, apiKey);
                    updated = check.updated || updated;
                    newFills.push(check.fill);
                }
                node.fills = newFills;
                figma.closePlugin(updated
                    ? `Image background removed${typeof check.credits !== "undefined" &&
                        check.credits.toString().length > 0
                        ? ` (${check.credits} ${Number(check.credits) === 1 ? "credit" : "credits"} charged)`
                        : ""}.`
                    : "Nothing changed (No credits charged).");
            }
            else {
                figma.closePlugin("Select a node with image fill.");
            }
        });
    }
    if (figma.currentPage.selection.length !== 1) {
        figma.closePlugin("Select a single node.");
    }
    figma.clientStorage.getAsync("removeBgApiKey").then((apiKey) => {
        if (apiKey) {
            removeBG(figma.currentPage.selection[0], apiKey);
        }
        else {
            figma.closePlugin("Set API Key first.");
        }
    });
}
else if (figma.command == "removebgkey") {
    figma.clientStorage.getAsync("removeBgApiKey").then((apiKey) => {
        figma.showUI(__html__, {
            height: 220,
            width: 348,
            visible: true,
            themeColors: true,
        });
        figma.ui.postMessage({
            type: "key",
            apikey: apiKey,
        });
        figma.ui.onmessage = (response) => {
            figma.clientStorage.setAsync("removeBgApiKey", response).then(() => {
                figma.closePlugin("API Key set.");
            });
        };
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/code.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsZ0JBQWdCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBLCtCQUErQixlQUFlLEVBQUUsb0RBQW9EO0FBQ3BHLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMOzs7Ozs7OztVRXBHQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlnbWEtcmVtb3ZlLWJnLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtcmVtb3ZlLWJnL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZmlnbWEtcmVtb3ZlLWJnL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9maWdtYS1yZW1vdmUtYmcvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaWYgKGZpZ21hLmNvbW1hbmQgPT0gXCJyZW1vdmViZ2Z1bmNcIikge1xuICAgIGZ1bmN0aW9uIGNoZWNrRmlsbChmaWxsLCBhcGlLZXkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmIChmaWxsLnR5cGUgPT09IFwiSU1BR0VcIikge1xuICAgICAgICAgICAgICAgIGZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IGZpZ21hLmdldEltYWdlQnlIYXNoKGZpbGwuaW1hZ2VIYXNoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBieXRlcyA9IHlpZWxkIGltYWdlLmdldEJ5dGVzQXN5bmMoKTtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicnVuXCIsXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogYnl0ZXMuYnVmZmVyLFxuICAgICAgICAgICAgICAgICAgICBhcGlrZXk6IGFwaUtleSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEudWkub25tZXNzYWdlID0gKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNbXCJlcnJvcnNcIl0gIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KHJlc1tcImVycm9yc1wiXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNbXCJlcnJvcnNcIl0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKHJlc1tcImVycm9yc1wiXVswXS50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SW1hZ2VGaWxsID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmaWxsKSk7XG4gICAgICAgICAgICAgICAgbmV3SW1hZ2VGaWxsLmltYWdlSGFzaCA9IGZpZ21hLmNyZWF0ZUltYWdlKHJlc3BvbnNlLnVpbnQ4QXJyYXkpLmhhc2g7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogbmV3SW1hZ2VGaWxsLFxuICAgICAgICAgICAgICAgICAgICBjcmVkaXRzOiByZXNwb25zZS5jcmVkaXRzLFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZpbGw6IGZpbGwsXG4gICAgICAgICAgICAgICAgdXBkYXRlZDogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQkcobm9kZSwgYXBpS2V5KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBsZXQgdHlwZXMgPSBbXCJSRUNUQU5HTEVcIiwgXCJFTExJUFNFXCIsIFwiUE9MWUdPTlwiLCBcIlNUQVJcIiwgXCJWRUNUT1JcIiwgXCJURVhUXCJdO1xuICAgICAgICAgICAgaWYgKHR5cGVzLmluZGV4T2Yobm9kZS50eXBlKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0ZpbGxzID0gW10sIHVwZGF0ZWQgPSBmYWxzZSwgY2hlY2s7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmaWxsIG9mIG5vZGUuZmlsbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSB5aWVsZCBjaGVja0ZpbGwoZmlsbCwgYXBpS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCA9IGNoZWNrLnVwZGF0ZWQgfHwgdXBkYXRlZDtcbiAgICAgICAgICAgICAgICAgICAgbmV3RmlsbHMucHVzaChjaGVjay5maWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZS5maWxscyA9IG5ld0ZpbGxzO1xuICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKHVwZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgPyBgSW1hZ2UgYmFja2dyb3VuZCByZW1vdmVkJHt0eXBlb2YgY2hlY2suY3JlZGl0cyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2suY3JlZGl0cy50b1N0cmluZygpLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYCAoJHtjaGVjay5jcmVkaXRzfSAke051bWJlcihjaGVjay5jcmVkaXRzKSA9PT0gMSA/IFwiY3JlZGl0XCIgOiBcImNyZWRpdHNcIn0gY2hhcmdlZClgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9LmBcbiAgICAgICAgICAgICAgICAgICAgOiBcIk5vdGhpbmcgY2hhbmdlZCAoTm8gY3JlZGl0cyBjaGFyZ2VkKS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIlNlbGVjdCBhIG5vZGUgd2l0aCBpbWFnZSBmaWxsLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiU2VsZWN0IGEgc2luZ2xlIG5vZGUuXCIpO1xuICAgIH1cbiAgICBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwicmVtb3ZlQmdBcGlLZXlcIikudGhlbigoYXBpS2V5KSA9PiB7XG4gICAgICAgIGlmIChhcGlLZXkpIHtcbiAgICAgICAgICAgIHJlbW92ZUJHKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXSwgYXBpS2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiU2V0IEFQSSBLZXkgZmlyc3QuXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5lbHNlIGlmIChmaWdtYS5jb21tYW5kID09IFwicmVtb3ZlYmdrZXlcIikge1xuICAgIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoXCJyZW1vdmVCZ0FwaUtleVwiKS50aGVuKChhcGlLZXkpID0+IHtcbiAgICAgICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIyMCxcbiAgICAgICAgICAgIHdpZHRoOiAzNDgsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgdGhlbWVDb2xvcnM6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcImtleVwiLFxuICAgICAgICAgICAgYXBpa2V5OiBhcGlLZXksXG4gICAgICAgIH0pO1xuICAgICAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoXCJyZW1vdmVCZ0FwaUtleVwiLCByZXNwb25zZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJBUEkgS2V5IHNldC5cIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvY29kZS50c1wiXSgpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9