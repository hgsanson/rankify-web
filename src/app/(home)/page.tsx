import { Radio } from 'lucide-react'
import Image from 'next/image'
import logo from '../../assets/logo.png'
import SubscriptionWrapper from './subscription-form'

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col justify-center gap-16">
      <div className="flex flex-col gap-8 items-center md:items-start">
        <Image src={logo} alt="Rankify" width={108.5} height={30} />

        <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
          <span className="text-blue">Code Dev</span>
          Summit 2025
        </h1>
      </div>

      <div className="flex gap-5 items-stretch flex-col md:flex-row">
        <div className="flex-1 bg-gray-700 border-gray-600 rounded-2xl p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              About the event
            </h2>
            <span className="text-purple font-semibold text-xs flex items-center gap-2">
              <Radio className="size-5" />
              LIVE
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            An event made by and for developers who are passionate about
            creating innovative solutions and sharing knowledge. We will dive
            into the latest trends in software development, systems
            architecture, and emerging technologies, with lectures, workshops,
            and hackathons. March 15-17 | 6:00 PM - 9:00 PM | Online & Free
          </p>
        </div>

        <SubscriptionWrapper />
      </div>
    </div>
  )
}
