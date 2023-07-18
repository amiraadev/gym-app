import Htext from "@/shared/Htext";
import {BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from 'framer-motion';
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

type Props = {
    setSelectedPage :(value:SelectedPage) =>void
}
const benefits : Array<BenefitType> =[
    {
        icon :<HomeModernIcon className="h-6 w-6"/>,
        title:"State of the art facilities",
        description:   "Elevate Your Fitness Experience in our Gym's Cutting-Edge, State-of-the-Art Facilities, Designed to Provide the Ultimate Environment for Your Workouts and Achieving Your Fitness Goals."
    },
    {
        icon :<UserGroupIcon className="h-6 w-6"/>,
        title:"100's of Diverse Classes",
        description:   "Explore a Vast Selection of Diverse Fitness Classes at Our Gym, Offering 100's of Options to Cater to Every Workout Style and Fitness Level."
    },
    {
        icon :<AcademicCapIcon className="h-6 w-6"/>,
        title:"Expert and Pro trainer",
        description:   "Train with the Best in the Industry at Our Gym, where Expert and Pro Trainers will Guide and Motivate You, Unlocking Your Full Potential and Taking Your Fitness Journey to New Heights."
    },
]

const container = {
    hidden:{},
    visible:{
        transition: {
            staggerChildren: 0.2
        }
    }
}
export default function Benefits({setSelectedPage}: Props) {
  return (
    <section 
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"> 
        <motion.div
           onViewportEnter={() => setSelectedPage(SelectedPage.Benefits) }
          >
            {/* HEADER */}
            <motion.div 
                initial="hidden"
                whileInView='visible'
                viewport={{once:true,amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                   hidden:{opacity:0,x: -50},
                   visible:{opacity:1,x: -0},
                }}
               className="md:w-3/5 md:my-5 ">
                <Htext>MORE THAN JUST A GYM </Htext>   
                    <p className="my-5 text-md "> We provide world class fitness equipment, trainers and classes to
                    get you to your ultimate fitness goals with ease. We provide true
                    care into each and every member.</p>       
             </motion.div >

             {/* bENEFITS */}
             <motion.div 
                className="md:flex items-center justify-betwwen gap-8 mt-5 "
                initial="hidden"
                whileInView="visible"
                viewport={{once:true ,amount:0.5}}
                variants={container}>
                { benefits.map((benefit:BenefitType) =>(
                    <Benefit 
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />
                ))}
             </motion.div>
             {/* GRAPHICS AND DESCRIPTION */}
                 <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* IMAGE */}
                    <img
                     className="mx-auto" 
                     src={BenefitsPageGraphic} 
                     alt="benefits-page-graphic" />
                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative">
                             <div className="before::absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                                <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}>
                                    <Htext>
                                        MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                        <span className="text-primary-500">FIT</span>
                                    </Htext>
                                 </motion.div>
                             </div>
                        </div>
                        {/* DESCRIPTION */}
                        <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}>
                        <p className="my-5">
                        Join our thriving community of millions of happy members, where getting fit is a shared journey filled with support, motivation, and success stories. Experience the power of our gym's positive atmosphere and witness how countless lives have transformed through fitness..
                        </p>
                        <p className="mb-5">
                        Witness the transformative power of fitness in action as millions of happy members achieve their fitness goals and embrace a healthier lifestyle at our gym.
                        </p>
                        </motion.div>
                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-2 before:right-40 before:z-[-1] before:content-sparkles">
                                 <ActionButton setSelectedPage={setSelectedPage}>
                                   Join Now   
                                 </ActionButton> 
                            </div>
                        </div>
                    </div>
                 </div>
        </motion.div>
    
    </section >
  )
}

