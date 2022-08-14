import type { NextPage } from 'next'
import Head from 'next/head'
import Details from '../components/details/Deatails'
import FAQ from '../components/faqs/FAQ'

import Features from '../components/features/Features'
import BHeader from '../components/header/Header'
import Invitation from '../components/invitation/Invitation'
import Layout from '../components/layouts/Layout'
import Pricing from '../components/pricing/Pricing'

import { API_FAQ, API_FEATURES, API_PRICING } from '../server/api'
import { Feature, Price, Faq } from '../types'

type HomeProps = {
  features: Feature[];
  pricing: Price[];
  faqs: Faq[];
}

const Home: NextPage<HomeProps> = ({ features, pricing, faqs }) => {
  return (
    <Layout>
      <Head>
        <title>Telegram utils</title>
        <meta name="description" content="Powerful tools to improve you Telegram experience. Real members for yout Telegram group and Useful BOTs"/>
      </Head>
      <BHeader />

      <Features items={ features }/>
      
      <Details />

      <Invitation />

      <FAQ items={ faqs }/>

      <Pricing items={ pricing } />
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const responseFeatures = await fetch(API_FEATURES);
    const features = await responseFeatures.json();

    const responsePricing = await fetch(API_PRICING);
    const pricing = await responsePricing.json();

    const responseFAQ= await fetch(API_FAQ);
    const faqs = await responseFAQ.json();

    if (!responseFeatures.ok || !responsePricing.ok || !responseFAQ.ok) {
      return {
        notFound: true
      }
    }

    return {
      props: { features, pricing, faqs }
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}

export default Home
