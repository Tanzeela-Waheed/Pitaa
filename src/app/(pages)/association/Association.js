"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Association = () => {

  useEffect(() => {
    AOS.init({
      duration: 200,        // Even smoother animation
      once: true,           
      offset: 20,           // Reduced offset
      easing: 'ease-out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-white relative py-12 px-6 sm:px-10 overflow-hidden">
      
      {/* Light Gradient Background - Bohat light aur elegant */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/30 to-transparent"></div>
      
{/* Top Right Corner - Circuit Board Design */}
<div className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 md:-top-8 md:-right-8 lg:-top-12 lg:-right-12 xl:-top-16 xl:-right-16 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
  
  {/* Circuit container */}
  <div className="absolute top-0 right-0 w-full h-full">
    
    {/* Main chip/cpu */}
    <div className="absolute lg:top-10 lg:right-10 xl:top-12 xl:right-12 top-6 right-6 w-14 h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24">
      {/* Chip base */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/10 rounded-lg"></div>
      <div className="absolute inset-0 border-2 border-blue-600/50 rounded-lg"></div>
      
      {/* Chip details */}
      <div className="absolute top-1 left-1 right-1 h-3 bg-blue-600/30 rounded-t-md"></div>
      <div className="absolute bottom-1 left-1 right-1 h-3 bg-blue-600/30 rounded-b-md"></div>
      
      {/* Connection pins */}
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 flex flex-col gap-1">
        <div className="w-2 h-1 bg-blue-600/60 rounded-l-full"></div>
        <div className="w-3 h-1 bg-blue-600/70 rounded-l-full"></div>
        <div className="w-2 h-1 bg-blue-600/60 rounded-l-full"></div>
      </div>
      
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 flex flex-col gap-1">
        <div className="w-2 h-1 bg-blue-600/60 rounded-r-full"></div>
        <div className="w-3 h-1 bg-blue-600/70 rounded-r-full"></div>
        <div className="w-2 h-1 bg-blue-600/60 rounded-r-full"></div>
      </div>
    </div>
    
    {/* Circuit paths */}
    <svg className="absolute top-0 right-0 w-full h-full opacity-60">
      {/* Horizontal paths */}
      <line x1="40%" y1="30%" x2="70%" y2="30%" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="30%" y1="50%" x2="60%" y2="50%" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 2"/>
      <line x1="20%" y1="70%" x2="50%" y2="70%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5 3"/>
      
      {/* Vertical paths */}
      <line x1="50%" y1="20%" x2="50%" y2="50%" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="70%" y1="40%" x2="70%" y2="70%" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 2"/>
      
      {/* Connection points */}
      <circle cx="50%" cy="30%" r="2" fill="#3b82f6" fillOpacity="0.6"/>
      <circle cx="70%" cy="50%" r="2" fill="#3b82f6" fillOpacity="0.6"/>
      <circle cx="30%" cy="70%" r="2" fill="#3b82f6" fillOpacity="0.6"/>
    </svg>
    
    {/* Data flow dots */}
    <div className="absolute lg:top-24 lg:right-28 xl:top-32 xl:right-36 top-16 right-20 w-1.5 h-1.5 bg-blue-600/80 rounded-full animate-pulse"></div>
    <div className="absolute lg:top-40 lg:right-20 xl:top-52 xl:right-24 top-28 right-16 w-1.5 h-1.5 bg-blue-600/80 rounded-full animate-pulse"></div>
    
    {/* Tech glow */}
    <div className="absolute lg:top-12 lg:right-12 xl:top-16 xl:right-16 top-8 right-8 w-40 h-40 lg:w-56 lg:h-56 xl:w-72 xl:h-72 bg-blue-500/15 rounded-full blur-3xl"></div>
  </div>
</div>

      {/* Additional subtle element - Dark lines */}
      <div className="absolute top-32 right-0 w-px h-24 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
      <div className="absolute top-40 right-10 w-px h-16 bg-gradient-to-b from-blue-900/20 to-transparent rotate-12"></div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Elegant Heading - Reduced animation */}
        <div 
          data-aos="fade-up"
          data-aos-duration="400"
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light text-blue-800 tracking-wide pb-1 inline-block px-12">
            Association
          </h1>
          <div className="flex justify-center gap-2 pt-2">
            <div className="w-12 h-0.5 bg-blue-200 rounded-full"></div>
            <div className="w-2 h-0.5 bg-blue-400 rounded-full"></div>
            <div className="w-12 h-0.5 bg-blue-200 rounded-full"></div>
          </div>
        </div>

        {/* Content - Baday font size ke saath */}
        <div className="space-y-12 text-gray-800 text-lg md:text-xl leading-relaxed">
          
          {/* Classes of Membership - Reduced animation */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Classes of Membership</h2>
            <p className="mb-4">The membership of <strong>PITAA</strong> shall be granted for a period of one year and shall expire on the 31st day of December every year, irrespective of the date of grant of membership.</p>
            <p className="mb-3">There shall be two classes of memberships in the association:</p>
            <p className="ml-6 mb-3"><strong>Corporate Member</strong><br />○ A member that is either a body corporate, a multinational corporation with its head office or branch office in Pakistan.</p>
            <p className="ml-6 mb-3"><strong>Associate Member</strong><br />○ A member that is not a body corporate, a multinational corporation.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Application for Membership Enrollment */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Application for Membership Enrollment</h2>
            <p className="mb-3">• A sole proprietorship, academic, or institute is eligible for <strong>PITAA membership</strong>, provided it is engaged in IT academics or a relevant trade.</p>
            <p className="mb-3">• The <strong>PITAA Executive Committee</strong> will approve or reject membership applications, providing reasons for rejection.</p>
            <p className="mb-3">• In case of rejection, an appeal can be made to the <strong>General Body</strong>, whose decision will be final. A fresh application can be submitted after one year if the initial application is rejected.</p>
            <p className="mb-3">• If rejected, the admission fee and annual subscription will be refunded.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Representation of a Member */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Representation of a Member</h2>
            <p className="mb-3">• Each member is entitled to appoint <strong>one representative</strong> to participate in meetings.</p>
            <p className="mb-3">• The representative must be a proprietor, partner, or director, and their name will be recorded in the Association's register.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Rights and Duties of Members */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Rights and Duties of Members</h2>
            <p className="font-medium text-gray-800 mb-3 text-xl">Rights:</p>
            <p className="ml-6 mb-3">• To participate in <strong>PITAA's activities</strong> as per its rules and regulations.</p>
            <p className="ml-6 mb-3">• To access permissible information and benefits available to the Association.</p>
            <p className="ml-6 mb-5">• To avail privileges and benefits secured for PITAA as a collective body.</p>
            
            <p className="font-medium text-gray-800 mb-3 text-xl">Duties:</p>
            <p className="ml-6 mb-3">• To actively support <strong>PITAA's aims and objectives</strong> as outlined in its Memorandum of Association.</p>
            <p className="ml-6 mb-3">• To adhere to all provisions, rules, and regulations of the Association.</p>
            <p className="ml-6 mb-3">• To report matters that may impact other members or the Association negatively.</p>
            <p className="ml-6 mb-3">• To share any information that promotes the Association's goals.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Disqualification of Members */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Disqualification of Members</h2>
            <p className="mb-3">A member's membership will cease if they:</p>
            <p className="ml-6 mb-3">○ Fail to pay their subscription within one month of the due date (extendable up to three months under special circumstances).</p>
            <p className="ml-6 mb-3">○ Are declared insolvent, mentally unsound by a court, or convicted of an offense involving <strong>moral turpitude</strong>.</p>
            <p className="ml-6 mb-3">○ Violate the aims and objectives of the Association.</p>
            <p className="ml-6 mb-3">○ Are expelled for unethical practices or actions prejudicial to <strong>PITAA's interests</strong>.</p>
            <p className="ml-6 mb-3">○ Cease or wind up their business.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Membership Fees */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Membership Fees</h2>
            <p className="mb-3">The admission fee for all membership classes is <strong>Rs. _____</strong></p>
            <p className="mb-3">The annual subscription is as follows:</p>
            <p className="ml-6 mb-2"><strong>Corporate Member:</strong> Rs. ______</p>
            <p className="ml-6 mb-3"><strong>Associate Member:</strong> Rs. ______</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Funds of the Association */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Funds of the Association</h2>
            <p className="mb-3">The funds of PITAA shall comprise <strong>Admission Fees, Annual Subscriptions, gifts, donations, and other contributions</strong>. The Admission Fee and Annual Subscription shall be payable by the members of the Association as determined by the Executive Committee.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Operation of Accounts */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Operation of Accounts</h2>
            <p className="mb-3">All the money of PITAA shall be deposited in an approved scheduled bank. The bank account of PITAA shall be operated jointly by any two office bearers authorized by the <strong>Executive Committee</strong>.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Organizational Setup of PITAA */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Organizational Setup of PITAA</h2>
            <p className="mb-3">The Registered Office of PITAA shall be located in <strong>Lahore</strong>, with zonal offices in the following regions:</p>
            <p className="ml-6 mb-2"><strong>Southern Zone:</strong> Representing the provinces of _______________</p>
            <p className="ml-6 mb-3"><strong>Northern Zone:</strong> Representing the provinces of _______________</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Composition of the Executive Committee */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Composition of the Executive Committee</h2>
            <p className="mb-3">The Executive Committee of PITAA shall consist of the following:</p>
            <p className="ml-6 mb-2">1. A <strong>Chairman</strong></p>
            <p className="ml-6 mb-2">2. A <strong>Senior Vice Chairman</strong></p>
            <p className="ml-6 mb-2">3. A <strong>Vice Chairman</strong></p>
            <p className="ml-6 mb-4">4. Up to ten Executive Committee members (subject to proportional increases in membership, up to a maximum of thirty members)</p>
            <p className="mb-3">At least <strong>___</strong> of the Executive Committee members must be from the Corporate Class.</p>
            <p className="mb-3">Vacancies in reserved seats shall remain unfilled if not utilized and shall not count towards quorum determination. The offices of Chairman and Vice Chairman shall rotate between the Associate and Corporate Classes if at least 50% of General Body members belong to the Associate Class.</p>
            <p className="mb-3">The office bearers of PITAA shall be elected by the Executive Committee from amongst its members.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Appointment of the Election Commission */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Appointment of the Election Commission</h2>
            <p className="mb-3">Simultaneously with the approval of the election schedule, PITAA's Executive Committee shall appoint an <strong>Election Commission</strong> comprising three members who meet the following criteria:</p>
            <p className="ml-6 mb-2">○ Written consent to their appointment.</p>
            <p className="ml-6 mb-2">○ Have not held any PITAA office in the preceding two years.</p>
            <p className="ml-6 mb-2">○ Are independent, impartial, and non-partisan.</p>
            <p className="ml-6 mb-2">○ Will not contest or canvass in the election they oversee.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Functions of the Election Commission */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Functions of the Election Commission</h2>
            <p className="mb-3">The Election Commission shall oversee all election arrangements, including:</p>
            <p className="ml-6 mb-2">○ Appointment of polling staff.</p>
            <p className="ml-6 mb-2">○ Display of tentative voter lists and review of objections.</p>
            <p className="ml-6 mb-2">○ Supervision of polling, ensuring fairness and transparency.</p>
            <p className="ml-6 mb-2">○ Counting of votes and announcement of results.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Election Procedure */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Election Procedure</h2>
            <p className="mb-3">• Elections for Executive Committee members and office bearers shall be conducted by <strong>secret ballot</strong>. Postal ballots or proxies are not allowed.</p>
            <p className="mb-3">• Polling will occur at the head office and zonal offices. Where voter numbers exceed fifty, polling may be conducted in a public venue such as a hall or hotel.</p>
            <p className="mb-3">• A provisional voter list, with members' details, shall be displayed within seven days of the election schedule announcement.</p>
            <p className="mb-3">• Objections to voter lists must be submitted within seven days. The Election Commission will review and resolve these objections promptly.</p>
            <p className="mb-3">• Nomination papers for candidates must be submitted within four days of the final voter list's display. Candidates must be proposed and seconded by registered voters.</p>
            <p className="mb-3">• Polling for Executive Committee elections shall occur within five days of finalizing the candidate list. Office bearer elections shall follow within two days.</p>
            <p className="mb-3">• Election results will be announced at the <strong>Annual General Meeting (AGM)</strong> within fifteen days of polling.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Conduct of Elections */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Conduct of Elections</h2>
            <p className="ml-6 mb-3">○ Ballot papers shall have numbered counterfoils, signed by the polling officer and Secretary-General.</p>
            <p className="ml-6 mb-3">○ Voters must provide valid identification, including a CNIC, PITAA membership card, passport, or driving license.</p>
            <p className="ml-6 mb-3">○ Secrecy of votes shall be ensured, and adequate polling arrangements made.</p>
            <p className="ml-6 mb-3">○ Challenged votes will be decided upon by the Election Commission before results are announced.</p>
            <p className="ml-6 mb-3">○ In the event of a tie, results will be decided by a draw.</p>
            <p className="ml-6 mb-3">○ Election records shall be sealed and maintained securely by the Secretary-General.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Term of Office */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Term of Office</h2>
            <p className="mb-3">The tenure of the Executive Committee members shall be <strong>____ year</strong>, with 50% of members retiring annually. Initial retirements will be determined by a draw. Office bearers shall serve for one year and will not be eligible for consecutive terms in any representative capacity.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Filing of Returns */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Filing of Returns</h2>
            <p className="mb-3">PITAA's accounting year shall close on June 30 each year. Audited financial statements and a membership list as of September 30 shall be submitted to the Director, Trade Organizations, by December 31 annually.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* General Body of PITAA */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">General Body of PITAA</h2>
            <p className="mb-3">The General Body shall be PITAA's supreme governing authority, meeting twice annually. It shall:</p>
            <p className="ml-6 mb-2">○ Oversee all committees, representatives, and officers.</p>
            <p className="ml-6 mb-2">○ Make final decisions on appeals.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Executive Committee of PITAA */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Executive Committee of PITAA</h2>
            <p className="mb-3">The Executive Committee shall:</p>
            <p className="ml-6 mb-2">○ Execute policies and programs outlined by the General Body.</p>
            <p className="ml-6 mb-2">○ Frame election rules and oversee staff recruitment and remuneration.</p>
            <p className="ml-6 mb-2">○ Sanction expenditures and issue directives.</p>
            <p className="ml-6 mb-2">○ Represent PITAA in negotiations and communications with government authorities and private entities.</p>
            <p className="ml-6 mb-2">○ Add, alter, or repeal regulations subject to General Body approval.</p>
            <p className="ml-6 mb-2">○ The Executive Committee shall retire after two years but remain in office until the next elections are held.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Additional Provisions */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Additional Provisions</h2>
            <p className="mb-3">PITAA elections shall adhere to the <strong>Trade Organization Rules 2013</strong>. In case of conflict between this document and the Trade Organization Ordinance 2007, the latter shall prevail.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Chairman of the Association */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Chairman of the Association</h2>
            <p className="mb-3">The Chairman of the Association shall be the head of the entire organization, including all branches and subordinate bodies. The Chairman shall be an ex-officio member of the Executive Committee and will perform all functions incidental to the office or assigned by the General Body or the Executive Committee. The first Chairman shall not be removable from office for a period of two years, regardless of any ordinary or special resolution. The Chairman and Vice Chairman must not be from the same class of members.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Senior Vice Chairman of the Association */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Senior Vice Chairman of the Association</h2>
            <p className="mb-3">The Senior Vice Chairman shall assist the Chairman in the performance of their duties and provide support in fulfilling their responsibilities.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Vice Chairman of the Association */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Vice Chairman of the Association</h2>
            <p className="mb-3">The Vice Chairman shall assist the Chairman in the performance of their duties and provide support in fulfilling their responsibilities.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>

          {/* Paid President */}
          <section 
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Paid President</h2>
            <p className="mb-4">The Central Executive Committee may appoint a President of the Association on such terms and conditions, including remuneration, as deemed fit by the Committee. The President may be delegated specific functions by the Central Executive Committee as required from time to time. The President shall perform duties under the direction of the Chairman. The President will be responsible for implementing all policy and management decisions made by the Central Executive Committee and will supervise the overall functioning of the Association, including the Secretary-General.</p>
            
            <p className="mb-4">The President will have access to and control over all properties, documents, records, and assets of the Association, subject to the control of the Central Executive Committee. The President may direct the Secretary-General on how to manage these assets. The President will have the authority to issue and respond to all correspondences, while the Secretary-General will maintain records and be responsible for all correspondence. The President will ensure that the Secretary-General convenes meetings, issues notices and agendas, and circulates minutes and reports of meetings and conferences sponsored by the General Body or the Central Executive Committee.</p>
            
            <p className="mb-4">As the public face of the Association, the President will handle all matters related to public policy, lobbying, and execution of the Association's policies, programs, and decisions. The President will represent the Association in dealings with the government, authorities, international bodies, and other stakeholders, and will attend all meetings and conferences called by the General Body or the Central Executive Committee, unless the decision for such meetings specifies otherwise.</p>
            
            <p className="mb-3">All paid employees of the Association will work under the President's direction, although day-to-day supervision will lie with the Secretary-General. The President may inspect various offices of the Association as needed to ensure coordinated and efficient operations.</p>
          </section>
          <div className="w-full h-0.5 bg-gray-200 my-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Association;