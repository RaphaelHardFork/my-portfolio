import { Box, Heading, Text, Container } from "@chakra-ui/react"
import { useGlobalSetting } from "../../hooks/useGlobalSetting"

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
        <Heading as="h1" py="6">
          {lang === "EN"
            ? "Where I learned the code"
            : "Où est-ce que j'ai appris le code"}
        </Heading>
        <Box pb="4" color="black" bg="white">
          <Container maxW="90%">
            <Heading>Alyra blockchain school (HardFork promotion)</Heading>
            <Text>
              En février 2021 j’ai commencé la formation de cette école intitulé
              « Développeur Web décentralisée ». La formation était 100% en
              ligne pendant 6 mois (la formation fini le 17 septembre 2021).
            </Text>
            <Text>
              Pendant cette formation j’ai appris la culture du Web et les
              pratiques de travaille dans ce domaine (méthode Agile & SCRUM).
              Nous avons pratiqué les bases du développement Web avec HTML, CSS
              et JavaScript ainsi que l’utilisation de GitHub pour les projets
              collaboratifs ou personnel.
            </Text>
            <Text>
              Avec cette base nous avons pu explorer des frameworks pour le
              développement front-end avec ReactJS, Bootstrap et Chakra UI. La
              partie sur ReactJS à été découverte sous l’angle des hooks (qui
              est la nouvelle façon d’utiliser ce framework).
            </Text>
            <Text>
              Au cours de la formation nous avons également fait de la
              programmation orienté back-end avec Node.js, comme le
              développement d’un serveur.
            </Text>
            <Text>
              Ensuite nous avons attaqué notre apprentissage sur la blockchain
              par un peu de culture de cet écosystème (Satoshi Nakamoto,
              Bitcoin, Ethereum et son fonctionnement, …). Nous avons eu
              beaucoup de temps de cours sur Solidity et les bonnes pratiques de
              ce langage (notamment l’utilisation d’OpenZeppelin).
            </Text>
            <Text>
              Dans un premier nous utilisions Remix pour écrire et déployer nos
              smart contract puis nous avons rapidement abandonné Remix au
              profit de Hardhat qui est un environnement de développement pour
              Ethereum. Ce framework nous a permis d’écrire des tests unitaires
              sur les smart contracts et des scripts de déploiement et
              post-déploiement pour nos contrats.
            </Text>
            <Text>
              Enfin a dernière étape était de mélanger toute ces connaissances
              pour créer une Dapp, composés d’un front-end écrit en React JS et
              communiquant avec la blockchain via une API (INFURA) et une
              librairie (Ethers.js). En parallèle la promotion à eu l’occasion
              de présenter des veilles technologiques sur un large panel de
              sujets.
            </Text>
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
        <Heading>What I did before:</Heading>
        <Box color="black" bg="white">
          <Container maxW="90%">
            <Text>
              Avant la formation à l’école Alyra, je suis rester sans emploi
              pendant une dizaine de mois.{" "}
            </Text>
            <Heading>PhD Student at Paris-Est University</Heading>
            <Text>
              Je suis rester pendant 18 mois en préparation d’un doctorat en
              Science des matériaux à l’IFSTTAR (Institut Français des Sciences
              et Technologies des Transports, de l’Aménagement et des Réseaux).
              Mon sujet de thèse était porté sur la fabrication du béton de
              chanvre, un matériau isolant, plus précisément mon but était
              d’identifier les molécules à l’origine d’un retard de prise du
              ciment une fois mélangé aux copeaux de chanvre.{" "}
            </Text>
            <Heading>
              Master degree’s in vegatale biology at Claude Bernard University
            </Heading>
            <Text>
              Ce master était orienté sur l’étude de la plante au travers un
              large panel de discipline (taxonomie, évolution, agronomie,
              physiologie, …) avec deux axes de compétences principales qui
              étaient la biochimie (identification des molécules, et
              connaissances des voies métaboliques) et la génétique (étude des
              réseaux de gènes, méthodes de génie génétique, …).
            </Text>
            <Text>
              J’ai eu l’occasion de partir en Australie pour mon state de fin
              d’étude au sein de l’Université de Newcastle. Dans ce stage j’ai
              pu pratiquer différentes techniques de chimie analytiques comme
              l’HPLC, la spectrométrie UV-Vis et la RMN. Mais aussi lier ces
              techniques d’analyse avec des techniques de recherche de nouvelles
              molécules au sein même du génome d’une espèce.
            </Text>
            <Text>
              J’ai également, durant la première année, réaliser un stage de 2
              mois au laboratoire d’écologie microbienne de Lyon 1. Durant ce
              stage, j’ai aider un doctorant à mettre en évidence la respiration
              anaérobie d’un bactérie par la recherche de gènes. J’ai donc
              acquis des compétences en extraction d’ADN, en PCR, et en
              manipulation d’outils statistique pour la recherche de gènes.
            </Text>
            <Heading>
              Bachelor degree’s in ecology at Claude Bernard University
            </Heading>
            <Text>
              J’ai été diplômé d’un licence en écologie, l’intitulé exact était
              Biologie des organismes et des populations. Nous avons découvert,
              durant cette licence, les mécanismes de l’évolution, l’étude de la
              biodiversité, les méthodes de bio-statistiques, la dynamiques des
              populations, l’écologie à toute les échelles (de l’individu à la
              biosphère).
            </Text>
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
        <Heading>What I love doing:</Heading>
        <Box color="black" bg="white">
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
              sur IPFS. Voici quelque musique What I work for ? Depuis début
              2020, je travaille sur un projet de science ouverte appeler
              CoScience. Nous avons pour ambition de changer la manière de faire
              et réviser la sciences, notamment en redonnant le contrôle de la
              science à la communauté scientifique et en proposant des outils
              simples et pertinent pour améliorer la circulation des
              connaissances produite par la sciences. Plus d’information :{" "}
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
