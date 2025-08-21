export default function CheckoutProgress() {
  const steps = [
    { number: 1, label: 'Cart', active: true },
    { number: 2, label: 'Shipping', active: false },
    { number: 3, label: 'Payment', active: false },
    { number: 4, label: 'Confirmation', active: false },
  ]

  return (
    <section className="bg-gray-50 py-4">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex items-center">
                  <div
                    className={`${
                      step.active
                        ? 'bg-primary text-white'
                        : 'bg-gray-300 text-gray-600'
                    } rounded-full w-8 h-8 flex items-center justify-center text-sm font-weight-600`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`ml-2 ${
                      step.active ? 'text-primary font-weight-600' : 'text-gray-600'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-16 h-1 bg-gray-300 mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
