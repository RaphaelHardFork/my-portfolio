import {
  Text,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import { useGlobalSetting } from "../../hooks/useGlobalSetting"

const DecentralizedModal = ({ isOpen, onClose }) => {
  const { lang } = useGlobalSetting()
  return (
    <>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {lang === "EN"
              ? "A dentralized website?"
              : "Un site web décentralisé ?"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading>
              {lang === "EN"
                ? "What is decentralized?"
                : `Qu'est ce qui est décentralisé`}
            </Heading>
            {lang === "EN" ? (
              <Text>
                In order to fully decentralize the web site, we need to change
                the website's hosting method: files that's compose the website
                (like scripts, CSS,...). Files are stored on IPFS. IPFS
                (interplanetary file system) is a new protocol for data storage.
                Once stored in the network, we get a corresponding ID to access
                our content, this ID look like this:
                QmNsT7NF7LKuXuWJ6PJ6h9a9dANaC6aqwcXwVYoq5ZCrF8. This ID allow us
                to identify our data accurately, this way no one can compromise
                this data. Otherwise the ID will be different. The domain name
                is also decentralized, here I use a .eth domain name which is
                offered by Ethereum Name Service (ENS website).
              </Text>
            ) : (
              <Text>
                Pour que le site soit entièrement décentralisé nous avons besoin
                de changer le mode d’hébergement du site : les fichiers qui
                composes le site (script, CSS, …) et le nom de domaine. Les
                fichiers sont stocker sur IPFS. IPFS (interplanetary file
                system) est un nouveau protocole pour le stockage de données. Un
                fois stocker sur ce réseau, nous obtenons un identifiant
                correspondant à notre contenu, il est afficher sous forme d’un
                hash (ex :…). Ce hash est un identifiant unique à notre données,
                ainsi nul ne peut compromettre cette données sous peine de
                modifier le hash. Lire plus à propos de l’IPFS. Ensuite le nom
                de domaine est également décentralisé, ici j’utilise un nom de
                domaine .eth qui est proposer par Ethereum Name Service.
                Explication de ENS, et voir d’autres concurrant notamment
                Unstoppable Domains.
              </Text>
            )}

            <Heading>
              {lang === "EN" ? "How I did that?" : "Comment j'ai fait ça ?"}
            </Heading>
            {lang === "EN" ? (
              <Text>
                Here are tools I used to realise this decentralization: Fleek,
                ENS, PinataCloud, ...
              </Text>
            ) : (
              <Text>
                Voici les outils qui m’ont permis de réaliser cette
                décentralisation : Fleek, ENS, PinataCloud, …
              </Text>
            )}

            <Heading>
              {" "}
              {lang === "en"
                ? " Can I access to a truly decentralized website?"
                : "Comment je peux accèder à un site web décentralisé ?"}
            </Heading>
            {lang === "EN" ? (
              <Text>
                If you want to access to the fully decentralizaed version of
                this web site, install these following extension.
              </Text>
            ) : (
              <Text>
                Si vous voulez accéder à la version complètement décentralisée
                voici les outils que vous pouvez utiliser : Metamask, Brave, …
              </Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Text>Others ressources</Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DecentralizedModal
