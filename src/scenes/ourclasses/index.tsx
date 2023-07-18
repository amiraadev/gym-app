import { ClassType, SelectedPage } from '@/shared/types'
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from 'framer-motion';
import Htext from '@/shared/Htext'
import Class from './Class'

type Props = {
    setSelectedPage :(value:SelectedPage) =>void
}

const classes: Array<ClassType> = [
    {
      name: "Weight Training Classes",
      description:
        "Build strength and sculpt your physique with intense resistance training sessions.",
      image: image1,
    },
    {
      name: "Yoga Classes",
      description:
      " Find balance, flexibility, and inner peace through relaxing and invigorating yoga sessions.",
      image: image2,
    },
    {
      name: "Ab Core Classes",
      description:
        " Find balance, flexibility, and inner peace through relaxing and invigorating yoga sessions.",
      image: image3,
    },
    {
      name: "Adventure Classes",
      description:
        " Embark on exciting fitness adventures, pushing your limits and enjoying the great outdoors.",
      image: image4,
    },
    {
      name: "Fitness Classes",
      description:"Engage in dynamic workouts designed to boost cardiovascular endurance and overall fitness levels.",
      image: image5,
    },
    {
      name: "Training Classes",
      description:
        " Take your fitness journey to the next level with expert-led training sessions, tailored to your goals and abilities.",
      image: image6,
    },
  ];

export default function OurClasses({setSelectedPage}: Props) {
  return (
    <section id="ourclasses" className='w-full bg-primary-100 py-40'>
        <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
             className='mx-auto w-5/6 '
             initial="hidden"
             whileInView='visible'
             viewport={{once:true,amount:0.5}}
             transition={{duration:0.5}}
             variants={{
                hidden:{opacity:0,x: -50},
                visible:{opacity:1,x: -0},
             }}
             >
                <div>
                    <Htext>
                        Our Classes
                    </Htext>
                    <p className="py-5">
                    Discover an exciting array of classes at our gym, offering a wide range of fitness options to suit every interest, skill level, and schedule.
                    </p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>

        </motion.div>
    </section>
  )
}