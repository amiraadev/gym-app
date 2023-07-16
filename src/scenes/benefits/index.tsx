import Htext from "@/shared/Htext";
import { SelectedPage } from "@/shared/types"
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from 'framer-motion';


type Props = {
    setSelectedPage :(value:SelectedPage) =>void
}

export default function Benefits({setSelectedPage}: Props) {
  return (
    <section 
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"> 
        <motion.div
           onViewportEnter={() => setSelectedPage(SelectedPage.Benefits) }
          >
            <div>
              <Htext>MORE THAN JUST A GYM </Htext>   
              <p> We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.</p>       
             </div>
        </motion.div>
    
    </section >
  )
}

