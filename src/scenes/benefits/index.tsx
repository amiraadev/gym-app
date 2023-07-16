import Htext from "@/shared/Htext";
import { SelectedPage } from "@/shared/types"
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from 'framer-motion';


type Props = {
    setSelectedPage :(value:SelectedPage) =>void
}
const benefits =[
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
export default function Benefits({setSelectedPage}: Props) {
  return (
    <section 
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"> 
        <motion.div
           onViewportEnter={() => setSelectedPage(SelectedPage.Benefits) }
          >
            {/* HEADER */}
            <div className="md:w-3/5 md:my-5 ">
                <Htext>MORE THAN JUST A GYM </Htext>   
                    <p className="my-5 text-sm "> We provide world class fitness equipment, trainers and classes to
                    get you to your ultimate fitness goals with ease. We provide true
                    care into each and every member.</p>       
             </div>

             {/* bENEFITS */}
             <div className="md:flex items-center justify-betwwen gap-8 mt-5 ">
                {Benefits.map((Benefit) =>(
                    <Benefit/>
                ))}
             </div>

        </motion.div>
    
    </section >
  )
}

