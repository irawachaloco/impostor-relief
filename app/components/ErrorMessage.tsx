type ErrorMessageProps = {
  msg: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ msg }) => {
  if (!msg) return null;
  return (
    <div className="bg-red-100 rounded-sm border border-red-300 my-2 p-2 text-sm text-red-400">
      <p>Error: {msg}</p>
    </div>
  );
};

export default ErrorMessage;
