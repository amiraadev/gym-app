import { SelectedPage } from '@/shared/types'
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image1.png"
import image3 from "@/assets/image1.png"
import image4 from "@/assets/image1.png"
import image5 from "@/assets/image1.png"
import image6 from "@/assets/image1.png"
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage :(value:SelectedPage) =>void
}

export default function OurClasses({setSelectedPage}: Props) {
  return (
    <section id="ourclasses" className='w-full bg-primary-100 py-40'>
        <motion.div>

        </motion.div>
    </section>
  )
}