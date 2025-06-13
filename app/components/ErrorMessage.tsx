import React from "react";

type ErrorMessageProps = {
  msg: React.ReactNode;
};

const ErrorMessage: React.FC<ErrorMessageProps> = React.memo(({ msg }) => {
  if (!msg) return null;
  return (
    <div
      className="bg-red-100 rounded-sm border border-red-300 my-2 p-2 text-sm text-red-700"
      role="alert"
      data-testid="error-message"
    >
      <p>Error: {msg}</p>
    </div>
  );
});
ErrorMessage.displayName = "ErrorMessage";

export default ErrorMessage;
