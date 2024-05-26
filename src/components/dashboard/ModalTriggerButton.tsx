const ModalTriggerButton = ({ text }: { text: string }) => {
  return (
    <button className="border flex items-center border-zinc-800 hover:scale-105 transition-all group hover:border-indigo-300 justify-center rounded-md px-4 py-2">
      <span className="relative block text-zinc-600 group-hover:text-indigo-300">
        {text}
      </span>
    </button>
  );
};

export default ModalTriggerButton;
