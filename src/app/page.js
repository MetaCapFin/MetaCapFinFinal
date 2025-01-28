import AllInOneService from "@/components/all-in-one-services/all-in-one-service";
import EmpouringGrowth from "@/components/empowering-growth/empouring-growth";
import Footer from "@/components/footer/footer";
import { Main } from "@/components/main/main";
import Partner from "@/components/partner/partner";
import Solution from "@/components/solution/solution";
import Container from "@/components/ui/container";

export default function Home() {
  return (
    <>
      <Main />
      <Solution/>
      <AllInOneService/>
      <Partner/>
      <EmpouringGrowth/>
      <section className="text-white/70 font-light py-20">
        <Container>
          <p>The information on this website does not constitute an offer to sell securities or a solicitation of an offer to buy securities. Furthermore, none of the information contained on this website is a recommendation to invest in any securities or a recommendation of any interest in any fund or security offered by MetaCap. By using this website, you accept our Terms of Use and Privacy Policy. Past performance is no guarantee of future results. Any historical returns, expected returns, or probability projections may not reflect actual future performance. All investments involve risk and may result in loss, including loss of principal. MetaCap does not render investment, financial, legal, or accounting advice.</p>
          <p className="pt-3">Any financial forecasts or returns, whether in the form of dividends or capital appreciation, displayed on this website are for illustrative purposes only and are not a guarantee of future results.</p>
          <p className="pt-3">Alternative investments are speculative and possess a high level of risk. No assurance can be given that investors will receive a return of their capital. Investors who cannot afford to lose their entire investment should not invest. Investments in private placements are highly illiquid, and investors who cannot hold an investment for an indefinite term should not invest. Private credit investments may be complex and are subject to default risk. This website is only available to certain qualified investors.</p>       
          <p className="pt-3">The information on this website does not constitute investment advice. The only basis for purchasing any securities is the final base sale document or private placement memorandum. Such offerings are made only to persons who are “accredited investors” as defined in Rule 501(a) under the Securities Act of 1933, as amended. Investors should make their own independent evaluation and analysis, consult financial, tax, or investment consultants, and decide whether to invest. No communication by MetaCap or any of its affiliates through this website or any other medium should be construed as, or is intended to be, investment, tax, financial, accounting, or legal advice.</p>
          <p className="pt-3">All information published on this website is provided by and is the responsibility of the issuer of each fund. Neither MetaCap nor its related parties guarantees the sufficiency, accuracy, or completeness of any information on this website and its use.</p>
          <p className="pt-3">MetaCap is not a registered broker-dealer, and its services should not be construed as those of a registered broker-dealer, nor does MetaCap’s information imply any endorsement by regulatory entities.</p>
        </Container>
      </section>
      <Footer/>
    </>
  );
}
