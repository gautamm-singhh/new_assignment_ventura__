import CompanyInfo from '../../components/IPODetails/CompanyInfo';

function IPODetail() {
  const companyInfo=  
  {
    name: "OYO Rooms Limited",
    date: "10th Jul - 14th Jul 2025",
    issueSize: "₹ 576 - 606 Cr",
    priceBand: "₹ 387 - 407",
    lotValue: "₹ 14,652",
    lotSize: "36 Shares / 1 Lot",
    subscribed: "Subscribed 3.38x times in retail category",
    companyLogo: "https://res.cloudinary.com/ddmzirzgl/image/upload/v1765298224/ChatGPT_Image_Dec_9_2025_10_06_52_PM_uh3euz.png", 
    timeline: [
      { label: "Bidding Starts", date: "03/07/2025" },
      { label: "Bidding Ends", date: "10/08/2025" },
      { label: "Allotment Finalisation", date: "15/07/2025" },
      { label: "Refund Initiation", date: "01/02/2024" },
      { label: "Demat Transfer", date: "01/12/2024" },
      { label: "Listing Date", date: "31/12/2025" }
    ],
    aboutCompany: "India’s leading hospitality and hotel-aggregator platform operating globally in budget and premium stay categories.",
    financials: [
      { year: "2024", revenue: "₹5,120 Cr", totalAssets: "₹3,450 Cr", profit: "₹220 Cr" },
      { year: "2023", revenue: "₹4,600 Cr", totalAssets: "₹3,200 Cr", profit: "₹150 Cr" },
      { year: "2022", revenue: "₹4,100 Cr", totalAssets: "₹2,980 Cr", profit: "₹90 Cr" }
    ],
    listedAt: "-",
    gain: "-",
    listedOn: "-"
  }


  return (
    <div className=' relative flex  h-fit flex-col gap-3'>
      <CompanyInfo companyInfo={companyInfo}/>
      
    </div>
  )
}

export default IPODetail