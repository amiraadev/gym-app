import Htext from "@/shared/Htext";
import {BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from 'framer-motion';
import Benefit from "./Benefit";

type Props = {
    setSelectedPage :(value:SelectedPage) =>void
}
const benefits : Array<BenefitType> =[
    {
        icon :<HomeModernIcon className="h-6 w-6"/>,
        title:"State of the art facilities",
        description:   "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
    },
    {
        icon :<UserGroupIcon className="h-6 w-6"/>,
        title:"100's of Diverse Classes",
        description:   "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
    },
    {
        icon :<AcademicCapIcon className="h-6 w-6"/>,
        title:"Expert and Pro trainer",
        description:   "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
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
                    <p className="my-5 text-sm "> We provide world class fitness equipment, trainers and classes to
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
                 <div>
                    {/* IMAGE */}
                    <img src="" alt="" />
                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative">
                             <div className="before::absolute before:-top-20 before:-left-20"></div>
                        </div>
                        {/* DESCRIPTION */}
                    </div>
                 </div>
        </motion.div>
    
    </section >
  )
}

