const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919823460907"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center text-4xl shadow-lg hover:scale-110 transition-transform duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      💬
    </a>
  );
};

export default WhatsAppButton;
