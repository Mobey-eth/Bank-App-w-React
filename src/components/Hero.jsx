import styles from "../style"
import{discount, robot} from '../assets'
import { heroText } from "../constants"
import GetStarted from "./GetStarted"


const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className= {`flex-1 ${styles.flexStart} flex-col xl:px-2 ${styles.paddingX}`}>
        <div className="flex flex-row items-center py-[6px] px-[4] bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white ">
              20%
            </span> Discount For {" "}
            <span className="text-white">
              1 month 
            </span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full text-white">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" /> 
            {" "}
            <span className="text-gradient">Generation</span> {" "}
          </h1>

          <div className="sm:flex hidden md:mr-4 mr-0 text-white">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins text-white font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full" >
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
          We examine annual percentage rates, annual fees.
        </p>

        </div>
          
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          {/* sm:w-[50%] sm:h-[60%] */}
          <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5] mt-2" />
          <div className="absolute w-[40%] h-[35%] top-0 pink__gradient z-[0]" />
          <div className="absolute w-[80%] h-[80%] bottom-40 rounded-full white__gradient z-[1]" />
          <div className="absolute w-[50%] h-[50%] bottom-20 right-20 blue__gradient z-[0]" />
        </div>
      <div className={`${styles.flexCenter}`}>
        <div className="sm:hidden">
        <GetStarted />
        </div>
        
      </div>
    </section>
  )

export default Hero