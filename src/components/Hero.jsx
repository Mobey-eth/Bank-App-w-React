import styles from "../style"
import{discount, robot} from '../assets'
import { heroText } from "../constants"
import GetStarted from "./GetStarted"


const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className= {`flex-1 ${styles.flexStart} flex-col xl:px-0 ${styles.paddingX}`}>
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
            Payment Method. 
          </h1>

          <div className="sm:flex hidden md:mr-4 mr-0 text-white">
            <GetStarted />
          </div>

        </div>
      </div>
    </section>
  )

export default Hero