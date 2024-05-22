import React from "react";

function MessageItem({
  message,
  renderImageForYou,
  renderImageForUser,
  userInfo,
}: {
  message: any;
  renderImageForYou: any;
  renderImageForUser: any;
  userInfo: any;
}) {
  function formatTime(timestamp: string) {
    // Check if timestamp is a valid date string
    if (!isNaN(Date.parse(timestamp))) {
      // Convert timestamp string to Date object
      const date = new Date(timestamp);

      // Format the date to "hh:mm AM/PM" format
      const formattedTime = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(date);

      return formattedTime;
    } else {
      return "";
    }
  }

  if (message.senderId !== userInfo.id) {
    return (
      <div className="grid">
        <div className="flex gap-2.5">
          {renderImageForYou && (
            <img
              src="https://pagedone.io/asset/uploads/1710412177.png"
              alt="Shanay image"
              className="w-10 h-11"
            />
          )}

          {!renderImageForYou && <div className="w-10 h-11"></div>}

          <div className="grid">
            {renderImageForYou && (
              <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">
                Shanay cruz
              </h5>
            )}

            <div className="w-max grid">
              <div className="px-3.5 py-2 bg-gray-100 rounded justify-start  items-center gap-3 inline-flex">
                <h5 className="text-gray-900 text-sm font-normal leading-snug">
                  {message.content}
                </h5>
              </div>
              <div className="justify-end items-center inline-flex mb-2.5">
                <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">
                  {formatTime(message?.createdAt)}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex gap-2.5 justify-end">
      <div className="">
        <div className="grid mb-2">
          {renderImageForUser && (
            <h5 className="text-right text-gray-900 text-sm font-semibold leading-snug pb-1">
              You
            </h5>
          )}
          <div className="px-3 py-2 bg-indigo-600 rounded">
            <h2 className="text-white text-sm font-normal leading-snug">
              {message?.content}
            </h2>
          </div>
          <div className="justify-start items-center inline-flex">
            <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">
              {formatTime(message?.createdAt)}
            </h3>
          </div>
        </div>
      </div>
      {renderImageForUser && (
        <img
          src="https://pagedone.io/asset/uploads/1704091591.png"
          alt="Hailey image"
          className="w-10 h-11"
        />
      )}
      {!renderImageForUser && <div className="w-10 h-11"></div>}
    </div>
  );
}

export default MessageItem;
