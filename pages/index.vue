<script>
import ExperienceAndWallet from "@components/ExperienceAndWallet";
import SintingProtocol from "../components/SintingProtocol";
import Roadmap from "../components/Roadmap";
// import ContentHeader from "../components/ContentHeader";
import StablecoinMintingProtocol from "../components/StablecoinMintingProtocol/index.vue";
import Financial from "@components/Financial";
import OurTeam from "../components/OurTeam";

export default {
  name: "Home",
  render() {
    return (
      // <ContentHeader />
      <div>
        <ExperienceAndWallet />
        <SintingProtocol />
        <Roadmap />
        <Financial />
        <StablecoinMintingProtocol />
        <OurTeam />
      </div>
    );
  },
};
</script>

<style scoped>
.layout-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
}
</style>
