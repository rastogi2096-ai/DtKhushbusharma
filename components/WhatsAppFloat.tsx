export default function WhatsAppFloat(){
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=919718003685&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
      aria-label="Chat on WhatsApp"
    >
      <span>Chat on WhatsApp</span>
    </a>
  )
}
