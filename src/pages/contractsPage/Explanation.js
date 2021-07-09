import { Heading, Text } from "@chakra-ui/react"

const Explanation = () => {
  return (
    <>
      <Text>
        Dans cette section je présente quelques Smart Contract que j’ai écrit et
        dont vous pourrez interagir avec si vous voulez tester.
      </Text>
      <Heading>Qu’est ce qu’un smart Contract</Heading>
      <Text>
        Smart Contract pour contrat intelligent ou bien … Pour ma part je
        définit plus cela comme un contrat rigide qui est définit par le code
        qui le compose, ainsi c’est le code qui est régisseurs des deux parties,
        il ne peut pas y avoir d’exception dans ce type de contrat (pour ce qui
        est d’Ethereum, voir … pour des contrats plus souple). Ce principe
        procure un énorme avantage : la dispensation d’un tiers de confiance. En
        effet ce type de contrat permet de s’affranchir d’un tiers de confiance
        car les données sont enregistrer dans la blockchain (qui est un registre
        immuable et infalsifiable). Je vous présente après des cas pratiques.
      </Text>
      <Heading>Interagir avec un smart contract</Heading>
      <Text>
        Pour avoir une interaction avec un smart contract vous devez avoir un
        portefeuille électronique avec de l’argent dessus. En effet, toute
        interaction autre qu’une lecture sur la blockchain est payante (c’est le
        prix de l’immuabilité et de la non-falsification du registre). Les
        contrats de cette section sont déployer sur Ethereum, donc nous aurons
        besoin d’ether pour interagir avec ces contrats. Rassurez-vous, je ne
        vais pas vous faire payer cela, ces contrats sont déployer sur des
        réseaux de tests d’Ethereum, ainsi en allant sur des faucet vous pourrez
        obtenir des ether de test pour interagir avec mes contrats.
      </Text>
      <Heading>
        Installer un portefeuille électronique sur votre navigateur
      </Heading>
      <Text>
        Le portefeuille le plus documenté et utiliser du réseau Ethereum est
        sans doute Metamask. Nous avons réaliser l’ensemble de notre formation
        sur Ethereum en utilisant cet outils. Pour l’installer rendez-vous sur
        leur site. Télécharger l’extension et créez-vous un portefeuille, ils
        vous demanderont de sauvegarder votre clé privé, fait-le et prenez
        l’habitude de le faire pour tout portefeuille électrononique. Voici
        quelque ressources sur les clé privé et leur conservation. Une fois
        votre portefeuille créer vous devez le remplir d’ether, pour cela
        rendez-vous sur les faucet des différentes réseaux de tests et suivez
        les démarches pour obtenir des éther.
      </Text>
      <Text>
        Et voilà maintenant vous pouvez interagir avec mes smart contract,
        rendez vous sur les onglets correspondants pour voir les exemple de
        smart contract.
      </Text>
    </>
  )
}

export default Explanation

/*


*/
