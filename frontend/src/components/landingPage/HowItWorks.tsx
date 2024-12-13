
const HowItWorks = () => {
  return (
    <div className="dark:bg-black">
    <div className="flex justify-between w-[70%] h-[225px] shadow mx-auto relative -top-5 bg-white p-6 dark:bg-[#161617] dark:text-white rounded-md">
        <div className="w-[243px]">
          <div className="flex justify-center">
            <img src="/src/assets/Group1.png" alt="" className="w-24"/>
          </div>
          <div className="text-center mt-2">
            <h1 className="text-xl">Create Account</h1>
            <p className="text-[#9D9D9D]">First you have to create a account  here</p>
          </div>
        </div>
        <div className="w-[243px]">
          <div className="flex justify-center">
            <img src="/src/assets/Group2.png" alt="" className="w-24"/>
          </div>
          <div className="text-center mt-2">
            <h1 className="text-xl">Search work</h1>
            <p className="text-[#9D9D9D]">Search the best freelance work here</p>
          </div>
        </div>
        <div className="w-[243px]">
          <div className="flex justify-center">
            <img src="/src/assets/Group3.png" alt="" className="w-24"/>
          </div>
          <div className="text-center mt-2">
            <h1 className="text-xl">Save and apply</h1>
            <p className="text-[#9D9D9D]">Apply or save and start your work</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default HowItWorks