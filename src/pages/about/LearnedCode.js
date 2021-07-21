import { Box, Heading, Text, Container } from "@chakra-ui/react"
import { useGlobalSetting } from "../../hooks/useGlobalSetting"
import Carousel from "./Carousel"

const LearnedCode = () => {
  const { lang } = useGlobalSetting()

  return (
    <>
      <Box
        bgImage="https://ipfs.io/ipfs/QmNw8fri1wKssTn8vBeKwPsPMfaoYDUiQJMLLkxpKNPjui"
        bgSize="cover"
        bgAttachment="fixed"
        p="10"
        minH="50vh"
      >
        <Heading color="white" as="h1" py="6">
          {lang === "EN"
            ? "Where I learned the code"
            : "Où est-ce que j'ai appris le code"}
        </Heading>
        <Box mb="20" borderRadius="10" pb="4" color="black" bg="whiteAlpha.700">
          <Container maxW="90%">
            {lang === "EN" ? (
              <>
                <Heading py="6">
                  Alyra, l'école blockchain (promotion HardFork)
                </Heading>
                <Text mb="4">
                  I started a formation in feburary 2021, namely "Dencentralized
                  Web Developer". This latter was 100% in remote during 6 months
                  (end on 17 september).
                </Text>
                <Text mb="4">
                  During this formation, I learned the web culture and work
                  pratices in this domaine (like Agile and SCRUM method). We
                  have pratice web development basics with HTML, CSS and
                  Javascript, and also the use of GitHub for group or personal
                  project.
                </Text>
                <Text mb="4">
                  From this knowledge, we have explorated ReactJS which is a
                  framework for the web development and Bootstrap and Chakra-UI
                  for the front-end. We have discovered ReactJs through the
                  utilisation of hooks (which is the new way of development in
                  ReactJS).
                </Text>
                <Text mb="4">
                  During this formation, we have also practiced the back-end
                  side through Node.js.
                </Text>
                <Text mb="4">
                  Then we learned the blockchain through some culture of this
                  ecosystem (Bitcoin, Satoshi Nakamoto, forks, Ethereum, ...).
                  Then we spend a lot of time learning Solidity and his best
                  practices (through the utilisation of OpenZeppelin
                  especially).
                </Text>
                <Text mb="4">
                  In the first time, we use Remix to write and deploy our Smart
                  Contracts (what is a smart contract?). Then we focusing on
                  HardHat which is a framework for the development on Ethereum.
                  This framework allows to write unit tests and script for the
                  deployment and post-deployment maintenance.
                </Text>
                <Text>
                  And finally, the last step was to mix all this knowledge to
                  create decentralized app (Dapp). Composed of one front-end
                  writen in ReactJS and Ethers.js to communicate with the
                  Ethereum blockchain. And in parallele we have to present
                  technology intelligence in front (more or less) of the
                  promotion.
                </Text>
              </>
            ) : (
              <>
                <Heading py="6">
                  Alyra blockchain school (HardFork promotion)
                </Heading>

                <Text mb="4">
                  En février 2021 j’ai commencé la formation de cette école
                  intitulé « Développeur Web décentralisée ». La formation était
                  100% en ligne pendant 6 mois (la formation fini le 17
                  septembre 2021).
                </Text>
                <Text mb="4">
                  Pendant cette formation j’ai appris la culture du Web et les
                  pratiques de travaille dans ce domaine (méthode Agile &
                  SCRUM). Nous avons pratiqué les bases du développement Web
                  avec HTML, CSS et JavaScript ainsi que l’utilisation de GitHub
                  pour les projets collaboratifs ou personnel.
                </Text>
                <Text mb="4">
                  Avec cette base nous avons pu explorer des frameworks pour le
                  développement front-end avec ReactJS, Bootstrap et Chakra UI.
                  La partie sur ReactJS à été découverte sous l’angle des hooks
                  (qui est la nouvelle façon d’utiliser ce framework).
                </Text>
                <Text mb="4">
                  Au cours de la formation nous avons également fait de la
                  programmation orienté back-end avec Node.js, comme le
                  développement d’un serveur.
                </Text>
                <Text mb="4">
                  Ensuite nous avons attaqué notre apprentissage sur la
                  blockchain par un peu de culture de cet écosystème (Satoshi
                  Nakamoto, Bitcoin, Ethereum et son fonctionnement, …). Nous
                  avons eu beaucoup de temps de cours sur Solidity et les bonnes
                  pratiques de ce langage (notamment l’utilisation
                  d’OpenZeppelin).
                </Text>
                <Text mb="4">
                  Dans un premier nous utilisions Remix pour écrire et déployer
                  nos smart contract puis nous avons rapidement abandonné Remix
                  au profit de Hardhat qui est un environnement de développement
                  pour Ethereum. Ce framework nous a permis d’écrire des tests
                  unitaires sur les smart contracts et des scripts de
                  déploiement et post-déploiement pour nos contrats.
                </Text>
                <Text>
                  Enfin a dernière étape était de mélanger toute ces
                  connaissances pour créer une Dapp, composés d’un front-end
                  écrit en React JS et communiquant avec la blockchain via une
                  API (INFURA) et une librairie (Ethers.js). En parallèle la
                  promotion à eu l’occasion de présenter des veilles
                  technologiques sur un large panel de sujets.
                </Text>
              </>
            )}
          </Container>
        </Box>
      </Box>
      <Box
        bgImage="https://ipfs.io/ipfs/QmUnHpjH9h1fD7ZaX5kcf8J8UYt9LD8EKUuZnVjeSgyPo7"
        bgSize="cover"
        bgAttachment="fixed"
        minH="50vh"
        p="10"
      >
        <Heading color="white" as="h1" py="6">
          {lang === "EN"
            ? "What I did before"
            : "Qu'est ce que j'ai fait avant"}
        </Heading>
        <Box mb="20" borderRadius="10" pb="4" color="black" bg="whiteAlpha.700">
          <Container maxW="90%">
            {lang === "EN" ? (
              <>
                <Text as="i">
                  Before the formation I was unemployed during 10 months.
                </Text>
                <Heading>PhD Student at Paris-Est University</Heading>
                <Text>
                  During 18 months I was in a preparation of a PhD in material
                  science at IFSTTAR (The French Institute of science and
                  technology for transport, development and networks). My thesis
                  topic was focused on manufacture of hemp concrete, an
                  insulating material, more accurately my goal was to identify
                  molecules implicated in a delay in setting of the cement once
                  mixed with hemp shavings.
                </Text>
                <Heading>
                  Master degree’s in vegatale biology at Claude Bernard
                  University
                </Heading>
                <Text>
                  This master's degree was focused on the study of the plant
                  through a wide range of disciplines (taxonomy,
                  evolution,agronomy, physiology, ...) with two main areas of
                  competence which were biochemistry (identification of
                  molecules and knowledge of metabolic pathways) and genetics
                  (study of gene networks and genetic engineering methods).
                </Text>
                <Text>
                  I had the opportunity to go to Australia for an internship in
                  Newcastle University. In this internship I was able to
                  practice different analytical chemistry techniques such as
                  HPLC, UV-Vis spectrometry and NMR. But also mix these
                  analytical techniques with research of new molecules from the
                  genome of differents species.
                </Text>
                <Text>
                  I also, during the first year, complete a shorter internship
                  at Lyon 1 microbial ecology laboratory. During this
                  internship, I helped a PhD student to highligh the anaerobic
                  respiration of bacterial by looking for genes. So I acquired
                  skills in DNA extraction, PCR, and in the manipulation of
                  statistical tools for the genes research.
                </Text>
                <Heading>
                  Bachelor degree’s in ecology at Claude Bernard University
                </Heading>
                <Text>
                  I graduated with a bachelor's degree in ecology, the exact
                  title was biology of organisms and populations. During this
                  bachelor's degree we discovered the mechanisms of evolution,
                  the study of biodiversity, bio-statistical methods, population
                  dynamics and ecology at all scales (from the individual to the
                  biosphere).{" "}
                </Text>
              </>
            ) : (
              <>
                <Text py="4">
                  <Text as="i">
                    Avant la formation à l’école Alyra, je suis rester sans
                    emploi pendant une dizaine de mois.
                  </Text>
                </Text>
                <Heading pt="6">Doctorant à l'université Paris-Est</Heading>
                <Text>
                  Je suis rester pendant 18 mois en préparation d’un doctorat en
                  Science des matériaux à l’IFSTTAR (Institut Français des
                  Sciences et Technologies des Transports, de l’Aménagement et
                  des Réseaux). Mon sujet de thèse était porté sur la
                  fabrication du béton de chanvre, un matériau isolant, plus
                  précisément mon but était d’identifier les molécules à
                  l’origine d’un retard de prise du ciment une fois mélangé aux
                  copeaux de chanvre.{" "}
                </Text>
                <Heading pt="6">
                  Master en biologie végétale à l'université Claude Bernard Lyon
                  1
                </Heading>
                <Text>
                  Ce master était orienté sur l’étude de la plante au travers un
                  large panel de discipline (taxonomie, évolution, agronomie,
                  physiologie, …) avec deux axes de compétences principales qui
                  étaient la biochimie (identification des molécules, et
                  connaissances des voies métaboliques) et la génétique (étude
                  des réseaux de gènes, méthodes de génie génétique, …).
                </Text>
                <Text>
                  J’ai eu l’occasion de partir en Australie pour mon state de
                  fin d’étude au sein de l’Université de Newcastle. Dans ce
                  stage j’ai pu pratiquer différentes techniques de chimie
                  analytiques comme l’HPLC, la spectrométrie UV-Vis et la RMN.
                  Mais aussi lier ces techniques d’analyse avec des techniques
                  de recherche de nouvelles molécules au sein même du génome
                  d’une espèce.
                </Text>
                <Text>
                  J’ai également, durant la première année, réaliser un stage de
                  2 mois au laboratoire d’écologie microbienne de Lyon 1. Durant
                  ce stage, j’ai aider un doctorant à mettre en évidence la
                  respiration anaérobie d’un bactérie par la recherche de gènes.
                  J’ai donc acquis des compétences en extraction d’ADN, en PCR,
                  et en manipulation d’outils statistique pour la recherche de
                  gènes.
                </Text>
                <Heading pt="6">
                  Licence en écologie à l'université Claude Bernard Lyon 1
                </Heading>
                <Text mb="12">
                  J’ai été diplômé d’une licence en écologie, l’intitulé exact
                  était Biologie des organismes et des populations. Nous avons
                  découvert, durant cette licence, les mécanismes de
                  l’évolution, l’étude de la biodiversité, les méthodes de
                  bio-statistiques, la dynamiques des populations, l’écologie à
                  toute les échelles (de l’individu à la biosphère).
                </Text>
              </>
            )}
          </Container>
        </Box>
      </Box>
      <Box
        bgImage="https://ipfs.io/ipfs/QmYMFvYnT8Wd67m9MMYmridth57jPj6AGnkj1MoWLDZpZY"
        bgSize="cover"
        bgAttachment="fixed"
        minH="50vh"
        p="10"
      >
        <Heading color="white">What I love doing:</Heading>
        <Box mb="20" borderRadius="10" pb="4" color="black" bg="whiteAlpha.700">
          <Container maxW="90%">
            {lang === "EN" ? (
              <>
                <Text>
                  Overall I'm a big fan of nature, I'm passionate about seeing
                  the feats of nature and for this reason I'm fascinated by
                  biomimicry. Biomimicry is the act of drawing inspiration from
                  Nature to develop technologies, infrastructures or even
                  organizations. We can cite the exemple of the Shinkansen
                  (Japan) inspired by the beak of kingfishers, the polyethan
                  suits banned at the 2010 Olympics inspired by the skin of
                  sharks or the well-known exemple of Velcro closures inspired
                  by burdocks fruits.
                </Text>
                <Text>
                  Here are some of the actors in this movement who inspired me:
                  Biomimicry Institute, Asknature.org, Janine Benyus, Idriss
                  Aberkane and Gunter Pauli.
                </Text>
              </>
            ) : (
              <Text>
                Je suis globalement un grand fan de nature, je suis passionné de
                voir les prouesses de la nature et pour cette raison je suis
                fasciné par le biomimétisme. Le biomimétisme est le fait de
                s’inspirer de la Nature pour développer des technologies, des
                infrastructures ou encore des organisations. On peut citer
                l’exemple du Shinkansen inspiré du bec des martins-pécheurs, les
                combinaisons en polyuréthane interdite aux JO de 2010 inspirées
                de la peau des requins ou encore l’exemple bien connu des
                fermetures en Velcro inspirées des fruits de bardanes. Voici
                quelques acteurs de ce mouvement qui m’ont inspiré : Biomimicry
                Institute, Asknature.org Janine Benyus, Idriss Aberkane, Gunter
                Pauli. J’aime également faire de la photographie, notamment
                capturer des détails macroscopiques.
              </Text>
            )}

            <Carousel />
          </Container>
        </Box>
      </Box>
      <Box
        bgImage="https://ipfs.io/ipfs/QmaZ2aKviUZ9fYi1jDjnaybf5zJqZ8KQkDBfs53rPH4mLx"
        bgSize="cover"
        bgAttachment="fixed"
        minH="50vh"
        p="10"
      >
        <Heading color="white">What I work for ?</Heading>
        <Box mb="20" borderRadius="10" pb="4" color="black" bg="whiteAlpha.700">
          <Container maxW="90%">
            {lang === "EN" ? (
              <>
                <Text>
                  I have long benne interested in how science works, so my
                  attention quickly shifted to the business model of scientific
                  journals and its consequences for the quality of science.
                  Since early 2020, I have been working on an open science
                  project called CoScience. Our ambition is to change the way of
                  sharing knowledge resulting from scientific research work, our
                  main goal is to give back control of science to the scientific
                  community by offering simple and relevant tools to improve the
                  circulation of knowlegde.
                </Text>
              </>
            ) : (
              <>
                <Text>
                  Je suis intéressé depuis longtemps sur la manière dont
                  fonctionne la science, ainsi mon attention s’est rapidement
                  concentrer sur le modèle économique des revues scientifiques
                  et ses conséquences sur la qualité de la sciences. Depuis
                  début 2020, je travaille sur un projet de science ouverte
                  appeler CoScience. Nous avons pour ambition de changer la
                  manière de partager les connaissances issues du travaille de
                  recherche scientifique, notre principal objectif est de
                  redonner le contrôle de la science à la communauté
                  scientifique en proposant des outils simple et pertinent pour
                  améliorer la circulation des connaissances.{" "}
                </Text>
              </>
            )}
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default LearnedCode

/*
 
What I love doing ?

*/
