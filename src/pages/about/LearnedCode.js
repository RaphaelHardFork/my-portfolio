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
                <Heading>PhD Student at Paris-Est University</Heading>
                <Heading>
                  Master degree’s in vegatale biology at Claude Bernard
                  University
                </Heading>
                <Heading>
                  Bachelor degree’s in ecology at Claude Bernard University
                </Heading>
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
            <Text>
              Je suis globalement un grand fan de nature, je suis passionné de
              voir les prouesses de la nature et pour cette raison je suis
              fasciné par le biomimétisme. Le fait d’imiter la nature pour
              construire des technologies. Voici quelques exemple : (train
              japon, speedo, samsung, velcro). Voici des acteurs de ce mouvement
              que je suis : (biomimicry institute (pagefb), asknature, gunter
              pauli, idriss aberkane (bioniria), Janine, … J’aime également la
              photographie, voici quelque cliché que j’ai réaliser : Je
              m’intéresse à l’art depuis peu, notamment aux NFT, j’ai minter
              quelque NFT avec mes photos, mais ils ont besoin d’être redéployer
              sur IPFS. Voici quelque musique
            </Text>
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
            <Text>
              Depuis début 2020, je travaille sur un projet de science ouverte
              appeler CoScience. Nous avons pour ambition de changer la manière
              de faire et réviser la sciences, notamment en redonnant le
              contrôle de la science à la communauté scientifique et en
              proposant des outils simples et pertinent pour améliorer la
              circulation des connaissances produite par la sciences. Plus
              d’information :{" "}
            </Text>
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
