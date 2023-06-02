/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { type Technology } from '../../types/types'
import { techs1, techs2, techs3 } from '../../sections/Technologies/tech'
import Button from '../button/normalButton/Button'
import Card from '../card/Card'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const Cards = () => {
  const INITIAL_STATE = window.screen.width >= 640
  const [renderTech, setRenderTech] = useState<Technology[]>(techs1)
  const [renderTech2, setRenderTech2] = useState<Technology[]>(techs2)
  const [renderTech3, setRenderTech3] = useState<Technology[]>(techs3)
  const [showMore, setShowMore] = useState<boolean>(false)
  const [show8, setShow8] = useState<boolean>(INITIAL_STATE)
  const [show12, setShow12] = useState<boolean>(false)

  const handleClick = () => {
    if (showMore) {
      if (window.screen.width <= 640) {
        setShow12(false)
        setShow8(false)
      } else {
        setShow12(false)
      }
      setShowMore(false)
    } else if (!show8) {
      setShow8(true)
    } else if (show8 && !show12) {
      setShow12(true)
      setShowMore(true)
    }
  }

  return (
    <div className='flex flex-col items-center'>
      <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
      variants={container}
      className='flex flex-wrap justify-center gap-6 sm:gap-12 pb-10'>
        {
          renderTech.map(t =>
            <Card
            key={t.id}
            name={t.name}
            imageDark={t.imageDark}
            imageLight={t.imageLight}
            url={t.url}
            />)
        }
      </motion.div>

            {show8
              ? <motion.div
                initial='hidden'
                whileInView={'visible'}
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
                className='flex flex-wrap justify-center gap-6 sm:gap-12 pb-10'>
                    {
                      renderTech2.map(t =>
                        <Card
                        key={t.id}
                        name={t.name}
                        imageDark={t.imageDark}
                        imageLight={t.imageLight}
                        url={t.url}
                      />)
                    }
                </motion.div>
              : null}

            {show12
              ? <motion.div
                initial='hidden'
                whileInView={'visible'}
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
                className='flex flex-wrap justify-center gap-6 sm:gap-12 pb-10'>
                    {
                      renderTech3.map(t =>
                        <Card
                        key={t.id}
                        name={t.name}
                        imageDark={t.imageDark}
                        imageLight={t.imageLight}
                        url={t.url}
                      />)
                    }
                </motion.div>
              : null}

            <Button
            textES={`${showMore ? 'Mostrar menos' : 'Mostrar más'}`}
            textUS={`${showMore ? 'Show less' : 'Show more'}`}
            onClick={handleClick}
            />
        </div>
  )
}

export default Cards
