export const useConfirm = (message = "", callback, rejection) => {
    if (!callback || !rejection || typeof (callback, rejection) !== "function") {
      return;
    }
    const confirmAction = () => {
      if (confirm(message)) {
        callback();
      } else {
        rejection();
      }
    };
    return confirmAction;
  };