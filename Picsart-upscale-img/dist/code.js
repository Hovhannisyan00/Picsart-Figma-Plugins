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
if (figma.command == "upscaleImgFun") {
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
else if (figma.command == "upscaleImgKey") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsZ0JBQWdCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBLCtCQUErQixlQUFlLEVBQUUsb0RBQW9EO0FBQ3BHLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMOzs7Ozs7OztVRXBHQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUGljc2FydC1GaWdtYS1VcHNjYWxlLVBsdWdpbi8uL3NyYy9jb2RlLnRzIiwid2VicGFjazovL1BpY3NhcnQtRmlnbWEtVXBzY2FsZS1QbHVnaW4vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9QaWNzYXJ0LUZpZ21hLVVwc2NhbGUtUGx1Z2luL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9QaWNzYXJ0LUZpZ21hLVVwc2NhbGUtUGx1Z2luL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmlmIChmaWdtYS5jb21tYW5kID09IFwidXBzY2FsZUltZ0Z1blwiKSB7XG4gICAgZnVuY3Rpb24gY2hlY2tGaWxsKGZpbGwsIGFwaUtleSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKGZpbGwudHlwZSA9PT0gXCJJTUFHRVwiKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHZpc2libGU6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZmlnbWEuZ2V0SW1hZ2VCeUhhc2goZmlsbC5pbWFnZUhhc2gpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ5dGVzID0geWllbGQgaW1hZ2UuZ2V0Qnl0ZXNBc3luYygpO1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJydW5cIixcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiBieXRlcy5idWZmZXIsXG4gICAgICAgICAgICAgICAgICAgIGFwaWtleTogYXBpS2V5LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc1tcImVycm9yc1wiXSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkocmVzW1wiZXJyb3JzXCJdKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc1tcImVycm9yc1wiXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4ocmVzW1wiZXJyb3JzXCJdWzBdLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJbWFnZUZpbGwgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZpbGwpKTtcbiAgICAgICAgICAgICAgICBuZXdJbWFnZUZpbGwuaW1hZ2VIYXNoID0gZmlnbWEuY3JlYXRlSW1hZ2UocmVzcG9uc2UudWludDhBcnJheSkuaGFzaDtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBuZXdJbWFnZUZpbGwsXG4gICAgICAgICAgICAgICAgICAgIGNyZWRpdHM6IHJlc3BvbnNlLmNyZWRpdHMsXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmlsbDogZmlsbCxcbiAgICAgICAgICAgICAgICB1cGRhdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVCRyhub2RlLCBhcGlLZXkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCB0eXBlcyA9IFtcIlJFQ1RBTkdMRVwiLCBcIkVMTElQU0VcIiwgXCJQT0xZR09OXCIsIFwiU1RBUlwiLCBcIlZFQ1RPUlwiLCBcIlRFWFRcIl07XG4gICAgICAgICAgICBpZiAodHlwZXMuaW5kZXhPZihub2RlLnR5cGUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3RmlsbHMgPSBbXSwgdXBkYXRlZCA9IGZhbHNlLCBjaGVjaztcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZpbGwgb2Ygbm9kZS5maWxscykge1xuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IHlpZWxkIGNoZWNrRmlsbChmaWxsLCBhcGlLZXkpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkID0gY2hlY2sudXBkYXRlZCB8fCB1cGRhdGVkO1xuICAgICAgICAgICAgICAgICAgICBuZXdGaWxscy5wdXNoKGNoZWNrLmZpbGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLmZpbGxzID0gbmV3RmlsbHM7XG4gICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4odXBkYXRlZFxuICAgICAgICAgICAgICAgICAgICA/IGBJbWFnZSBiYWNrZ3JvdW5kIHJlbW92ZWQke3R5cGVvZiBjaGVjay5jcmVkaXRzICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVjay5jcmVkaXRzLnRvU3RyaW5nKCkubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgICgke2NoZWNrLmNyZWRpdHN9ICR7TnVtYmVyKGNoZWNrLmNyZWRpdHMpID09PSAxID8gXCJjcmVkaXRcIiA6IFwiY3JlZGl0c1wifSBjaGFyZ2VkKWBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn0uYFxuICAgICAgICAgICAgICAgICAgICA6IFwiTm90aGluZyBjaGFuZ2VkIChObyBjcmVkaXRzIGNoYXJnZWQpLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiU2VsZWN0IGEgbm9kZSB3aXRoIGltYWdlIGZpbGwuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJTZWxlY3QgYSBzaW5nbGUgbm9kZS5cIik7XG4gICAgfVxuICAgIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoXCJyZW1vdmVCZ0FwaUtleVwiKS50aGVuKChhcGlLZXkpID0+IHtcbiAgICAgICAgaWYgKGFwaUtleSkge1xuICAgICAgICAgICAgcmVtb3ZlQkcoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdLCBhcGlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJTZXQgQVBJIEtleSBmaXJzdC5cIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmVsc2UgaWYgKGZpZ21hLmNvbW1hbmQgPT0gXCJ1cHNjYWxlSW1nS2V5XCIpIHtcbiAgICBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwicmVtb3ZlQmdBcGlLZXlcIikudGhlbigoYXBpS2V5KSA9PiB7XG4gICAgICAgIGZpZ21hLnNob3dVSShfX2h0bWxfXywge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMjAsXG4gICAgICAgICAgICB3aWR0aDogMzQ4LFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHRoZW1lQ29sb3JzOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogXCJrZXlcIixcbiAgICAgICAgICAgIGFwaWtleTogYXBpS2V5LFxuICAgICAgICB9KTtcbiAgICAgICAgZmlnbWEudWkub25tZXNzYWdlID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKFwicmVtb3ZlQmdBcGlLZXlcIiwgcmVzcG9uc2UpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiQVBJIEtleSBzZXQuXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2NvZGUudHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==