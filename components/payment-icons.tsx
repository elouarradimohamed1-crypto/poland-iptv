'use client'

export function PaymentIcons() {
  return (
    <div className="flex gap-3 items-center justify-center mt-4">
      {/* PayPal */}
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path
          className="text-neutral-400"
          d="M9.5 6.5c0-.8.7-1.5 1.5-1.5h2c1.7 0 3 1.3 3 3 0 1.4-1.1 2.6-2.5 2.7-.4 0-.8-.1-1.1-.4-.3.5-.8.8-1.4.8-.9 0-1.5-.7-1.5-1.5V9.5m0 0c0-1.4 1.1-2.5 2.5-2.5h2c2.2 0 4 1.8 4 4 0 1.8-1.4 3.3-3.1 3.5.5.1 1 .5 1 1.1 0 .7-.6 1.3-1.3 1.3-.7 0-1.3.6-1.3 1.3v2c0 .7-.6 1.3-1.3 1.3H3.4c-.7 0-1.3-.6-1.3-1.3V7.8c0-.7.6-1.3 1.3-1.3h6.1z"
          fill="#003087"
        />
      </svg>

      {/* Visa */}
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <rect width="24" height="24" rx="2" className="text-blue-600" fill="currentColor" />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          className="text-white text-xs font-bold"
          fill="white"
        >
          VISA
        </text>
      </svg>

      {/* Mastercard */}
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="8" cy="12" r="5.5" fill="#FF5F00" />
        <circle cx="16" cy="12" r="5.5" fill="#EB001B" />
        <path
          d="M12 7.5c1.5 1.3 2.5 3.2 2.5 5.5s-1 4.2-2.5 5.5c-1.5-1.3-2.5-3.2-2.5-5.5s1-4.2 2.5-5.5z"
          fill="#F79E1B"
        />
      </svg>

      {/* Bitcoin */}
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="11" className="text-orange-500" fill="currentColor" />
        <text
          x="12"
          y="15"
          textAnchor="middle"
          className="text-white text-xs font-bold"
          fill="white"
        >
          ₿
        </text>
      </svg>
    </div>
  )
}
