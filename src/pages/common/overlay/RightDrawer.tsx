interface RightDrawerProps {
  open: boolean;
  onClose: () => void;
  children: any;
}

const RightDrawer = ({ open, onClose, children }: RightDrawerProps) => {
  return (
    <>
      {/* backdrop */}
      <div
        className={`absolute inset-0 top-16 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* drawer */}
      <div
        className={`absolute top-16 right-0 h-full w-full bg-white z-50
        transform transition-transform duration-300
        ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}
      >
        {children}
      </div>
    </>
  );
};

export default RightDrawer;