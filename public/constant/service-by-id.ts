import main_driving from "@images/Services/main_driving.png";
import second_driving from "@images/Services/second_driving.png";
import main_employment from "@images/Services/main_employment.png";
import second_employment from "@images/Services/second_employment.png";
import main_drug from "@images/Services/main_drug.png";
import second_drug from "@images/Services/second_drug.png";
import main_iqama from "@images/Services/main_iqama.png";
import second_iqama from "@images/Services/second_iqama.png";
import main_premarital from "@images/Services/main_premarital.png";
import second_premarital from "@images/Services/second_premarital.png";
export interface ServiceByIdEntry {
  id: string;
  title: string;
  subtitle: string;
  main_image?: string | null;
  second_image?: string | null;
  description: string;
  descriptionHtml: string;
  services: Array<{
    name: string;
    description: string;
  }>;
}

export const serviceById = [
  {
    id: `1`,
    title: "Driving License Exam",
    subtitle: "Services Details",
    main_image: main_driving,
    second_image: second_driving,
    description: "Mandatory medical test to confirm fitness for driving",
    descriptionHtml: `
      <div>
        
        <div style="color: #00bcd4; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
            Delivery Examination
        </div>
        
        <h1 style="color: #1a237e; font-size: 36px; margin-bottom: 25px; font-weight: 700; margin-top: 0;">
            Driving License Medical Test
        </h1>
        
        <p style="color: #424242; font-size: 16px; margin-bottom: 40px; line-height: 1.8;">
            The medical examination for the driving license is a necessary procedure to ensure that the applicant is in good health and able to drive safely.
        </p>
        
        <h2 style="color: #1a237e; font-size: 28px; margin-top: 40px; margin-bottom: 20px; font-weight: 700;">
            What's Included:
        </h2>
        
        <ul style="list-style: none; margin-bottom: 30px; padding-left: 0;">
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                Vision tests
            </li>
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                General blood tests
            </li>
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                Physical and mental health assessment
            </li>
        </ul>
        
        <h2 style="color: #1a237e; font-size: 28px; margin-top: 40px; margin-bottom: 20px; font-weight: 700;">
            Process:
        </h2>
        
        <ul style="list-style: none; margin-bottom: 30px; padding-left: 0;">
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Conducting the Tests:</strong> Medical tests are carried out at authorized medical centers.
            </li>
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Sending Results:</strong> The examination results are sent directly to the Traffic Department.
            </li>
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Approved Centers:</strong> A list of accredited medical centers can be found online or at Traffic Department branches.
            </li>
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Validity:</strong> The medical test report is usually valid for 3 months, after which a new examination may be required.
            </li>
        </ul>
        
        <p style="color: #00bcd4; font-size: 16px; margin-top: 30px; line-height: 1.8; font-weight: 600;">
            This examination plays a key role in ensuring road safety and reducing risks caused by health-related issues.
        </p>
        
    </div>
    `,
    services: [
      {
        name: "Medical Tests Included",
        description:
          "A list of the main tests such as vision test, blood test, and physical/mental health check.",
      },
      {
        name: "Purpose of the Exam",
        description: "To ensure applicants are medically fit to drive safely.",
      },
      {
        name: "Exam Procedures",
        description:
          "Tests are conducted at authorized medical centers and results are sent directly to the Traffic Department.",
      },
      {
        name: "Toxicology Test",
        description:
          "If required, toxicology tests check for the presence of substances that may impair driving.",
      },
      {
        name: "Importance of the Medical Exam: Public Safety",
        description:
          "These medical checks help reduce accidents and protect both drivers and the public.",
      },
      {
        name: "Legal Compliance",
        description:
          "The medical exam is mandatory under Saudi regulations for issuing or renewing a driving license.",
      },
      {
        name: "Risk Reduction",
        description:
          "The medical exam contributes to reducing accidents caused by unauthorized use of weapons or due to health problems.",
      },
    ],
  },
  {
    id: `2`,
    title: "Drug Test",
    main_image: main_drug,
    second_image: second_drug,
    subtitle: "Services Details",
    description:
      "Trusted toxicology screening to protect public health and safety",
    descriptionHtml: `
     <div >
        
        <div style="color: #00bcd4; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
            Drug Test
        </div>
        
        <h1 style="color: #1a237e; font-size: 36px; margin-bottom: 25px; font-weight: 700; margin-top: 0;">
            Drug Test (Toxicology Test)
        </h1>
        
        <p style="color: #424242; font-size: 16px; margin-bottom: 40px; line-height: 1.8;">
            The toxicology test is a mandatory requirement for obtaining a weapon license, ensuring that the applicant does not use any substances that could affect their safety or ability to handle a weapon responsibly.
        </p>
        
        <h2 style="color: #1a237e; font-size: 28px; margin-top: 40px; margin-bottom: 20px; font-weight: 700;">
            Types of Toxicology Tests
        </h2>
        
        <ul style="list-style: none; margin-bottom: 30px; padding-left: 0;">
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Comprehensive Toxicology Test:</strong> Detects a wide range of drugs and medications; used for identifying illegal drug use or monitoring medication effects.
            </li>
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Specialized Toxicology Test:</strong> Focuses on specific substances such as opioids, cocaine, or alcohol; often used in cases of poisoning or overdose.
            </li>
        </ul>
        
        <h2 style="color: #1a237e; font-size: 28px; margin-top: 40px; margin-bottom: 20px; font-weight: 700;">
            Sending Results
        </h2>
        
        <ul style="list-style: none; margin-bottom: 30px; padding-left: 0;">
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                The examination results are sent directly to the Traffic Department to complete the licensing procedure.
            </li>
        </ul>
        
        <h2 style="color: #1a237e; font-size: 28px; margin-top: 40px; margin-bottom: 20px; font-weight: 700;">
            Toxicology Test Samples
        </h2>
        
        <ul style="list-style: none; margin-bottom: 30px; padding-left: 0;">
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Urine:</strong> Most common, detects many substances for a certain period.
            </li>
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Blood:</strong> More accurate for measuring substance levels, though detection time may be shorter for some drugs.
            </li>
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Saliva:</strong> Detects certain substances but is less accurate than blood or urine.
            </li>
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Hair:</strong> Can reveal substance use over a longer period, may require additional confirmatory testing.
            </li>
        </ul>
        
    </div>

  `,
    services: [
      {
        name: "Preserving Public Health",
        description:
          "The examination aims to prevent the spread of infectious diseases and protect community health.",
      },
      {
        name: "Ensuring Food Safety",
        description:
          "For food-related professions, the examination ensures that workers do not carry diseases that can be transmitted through food.",
      },
      {
        name: "Compliance with Legal Requirements",
        description:
          "Many activities and professions require a valid health certificate, which in turn requires passing the medical examination.",
      },
      {
        name: "Urine Tests",
        description: "To assess kidney and urinary tract health.",
      },
      {
        name: "Blood Tests",
        description:
          "To detect diseases such as HIV/AIDS, syphilis, viral hepatitis, typhoid, and paratyphoid.",
      },
      {
        name: "Nasal and Throat Swabs",
        description: "To detect certain diseases such as diphtheria.",
      },
      {
        name: "Stool Tests",
        description:
          "To detect parasites and bacteria that cause intestinal diseases.",
      },
    ],
  },
  {
    id: `3`,
    title: "Employment Medical Exam",
    subtitle: "Services Details",
    main_image: main_employment,
    second_image: second_employment,
    description:
      "Assessing health for better hiring decisions and safer work environments",
    descriptionHtml: `  <div>
        
        <div style="color: #00bcd4; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
            Employment Medical Exam
        </div>
        
        <h1 style="color: #1a237e; font-size: 36px; margin-bottom: 25px; font-weight: 700; margin-top: 0;">
            Employment Medical Exam
        </h1>
        
        <p style="color: #424242; font-size: 16px; margin-bottom: 40px; line-height: 1.8;">
            The employment medical exam is a set of medical tests conducted for job candidates to ensure their physical fitness and ability to perform job duties. The purpose of this exam is to assess the candidate's health condition and confirm that they are free from illnesses that may hinder their performance or pose risks to the workplace.
        </p>
        
        <h2 style="color: #1a237e; font-size: 28px; margin-top: 40px; margin-bottom: 20px; font-weight: 700;">
            Importance of the Employment Medical Exam
        </h2>
        
        <ul style="list-style: none; margin-bottom: 30px; padding-left: 0;">
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Ensuring Employee Safety:</strong> Identifies health issues that may affect performance or put the employee at risk.
            </li>
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Protecting the Work Environment:</strong> Prevents the spread of infectious diseases or health problems that could affect colleagues.
            </li>
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Quality Hiring:</strong> Assists in selecting the most suitable candidates based on health status and physical abilities.
            </li>
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Cost Reduction:</strong> Lowers potential expenses related to health insurance claims, treatments, or sick leave.
            </li>
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Improved Productivity:</strong> Builds a healthier, stronger, and more productive team.
            </li>
        </ul>
        
    </div>`,
    services: [
      {
        name: "Laboratory Tests",
        description:
          "May include blood and urine analysis and other tests to diagnose diseases.",
      },
      {
        name: "Radiological Examinations",
        description: "Such as chest X-rays.",
      },
      {
        name: "Specialized Tests",
        description:
          "Vary depending on the nature of the job, such as vision, hearing, or physical fitness tests.",
      },
      {
        name: "Additional Screenings",
        description: "Such as drug or alcohol tests.",
      },
      {
        name: "Clinical Examination",
        description:
          "Includes measuring vital signs like blood pressure, pulse, and temperature, along with a general physical examination.",
      },
    ],
  },
  {
    id: `4`,
    title: "Iqama Examination",
    main_image: main_iqama,
    second_image: second_iqama,
    subtitle: "Services Details",
    description: "Official medical examinations required for Iqama services",
    descriptionHtml: ` <div >
        
        <div style="color: #00bcd4; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
            Iqama Examination
        </div>
        
        <h1 style="color: #1a237e; font-size: 36px; margin-bottom: 25px; font-weight: 700; margin-top: 0;">
            Iqama Examination
        </h1>
        
        <p style="color: #424242; font-size: 16px; margin-bottom: 40px; line-height: 1.8;">
            The Iqama medical examination is a mandatory procedure for residents in the Kingdom of Saudi Arabia, whether for renewing or obtaining residency for the first time. The purpose of the examination is to ensure that expatriates are free from infectious diseases that may pose a threat to public health.
        </p>
        
        <h2 style="color: #1a237e; font-size: 28px; margin-top: 40px; margin-bottom: 20px; font-weight: 700;">
            Significance of the Residency Medical Examination
        </h2>
        
        <ul style="list-style: none; margin-bottom: 30px; padding-left: 0;">
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Public Health Protection:</strong> Prevents the spread of infectious diseases in the community.
            </li>
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Residency Issuance and Renewal:</strong> A basic requirement for obtaining or renewing the Iqama.
            </li>
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Disease Prevention:</strong> Detects infectious diseases early, making them easier to treat.
            </li>
        </ul>
        
        <h2 style="color: #1a237e; font-size: 28px; margin-top: 40px; margin-bottom: 20px; font-weight: 700;">
            What the Iqama Medical Examination Includes
        </h2>
        
        <ul style="list-style: none; margin-bottom: 30px; padding-left: 0;">
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Clinical Examinations:</strong> Vision, hearing, blood pressure, heart, lungs, nervous system, reproductive system, and skin checks.
            </li>
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Laboratory Tests:</strong> Blood, urine, and stool analysis, including screening for HIV/ AIDS and hepatitis B & C.
            </li>
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Radiology:</strong> Chest X-rays to detect tuberculosis.
            </li>
        </ul>
        
    </div>`,
    services: [
      {
        name: "Preserving Public Health",
        description:
          "The examination aims to prevent the spread of infectious diseases and protect community health.",
      },
      {
        name: "What the Medical Examination Includes",
        description: "",
      },
      {
        name: "Blood Tests",
        description:
          "To detect diseases such as HIV/ AIDS, syphilis, viral hepatitis, typhoid, and paratyphoid.",
      },
      {
        name: "Compliance with Legal Requirements",
        description:
          "Many activities and professions require a valid health certificate, which in turn requires passing the medical examination.",
      },
      {
        name: "Ensuring Food Safety",
        description:
          "For food-related professions, the examination ensures that workers do not carry diseases that can be transmitted through food.",
      },
      {
        name: "Urine Tests",
        description: "To assess kidney and urinary tract health.",
      },
      {
        name: "Stool Tests",
        description:
          "To detect parasites and bacteria that cause intestinal diseases.",
      },
      {
        name: "Nasal and Throat Swabs",
        description: "To detect certain diseases such as diphtheria.",
      },
      {
        name: "Other Tests",
        description:
          "May include additional tests depending on the activity and authority requirements.",
      },
    ],
  },
  {
    id: `5`,
    title: "Premarital Medical Examination",
    subtitle: "Services Details",
    main_image: main_premarital,
    second_image: second_premarital,
    description: "Ensuring Healthy Marriages and Future Generations",
    descriptionHtml: `
        <div >
        
        <div style="color: #00bcd4; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
            Premarital Medical Examination
        </div>
        
        <h1 style="color: #1a237e; font-size: 36px; margin-bottom: 25px; font-weight: 700; margin-top: 0;">
            Premarital Medical Examination
        </h1>
        
        <p style="color: #424242; font-size: 16px; margin-bottom: 40px; line-height: 1.8;">
            The premarital medical examination is a mandatory procedure for couples planning to marry in Saudi Arabia. It aims to detect certain genetic and infectious diseases to ensure the health of both partners and their future children
        </p>
        
        <h2 style="color: #1a237e; font-size: 28px; margin-top: 40px; margin-bottom: 20px; font-weight: 700;">
            What the Premarital Medical Examination Includes
        </h2>
        
        <ul style="list-style: none; margin-bottom: 30px; padding-left: 0;">
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Laboratory Tests:</strong> Blood tests to detect hereditary blood disorders and infectious diseases.
            </li>
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Genetic Counseling:</strong> Guidance for couples if one or both partners are carriers of certain diseases.
            </li>
            <li style="color: #424242; font-size: 16px; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6;">
                <span style="color: #00bcd4; font-size: 20px; position: absolute; left: 0; top: -2px;">●</span>
                <strong>Medical Consultation:</strong> A doctor explains the results and gives recommendations.
            </li>
        </ul>
        
    </div>`,
    services: [
      {
        name: "Appointment Booking",
        description:
          "Appointments can be booked through the 'Sehhaty' app or by calling 937.",
      },
      {
        name: "Laboratory Tests",
        description:
          "Include comprehensive blood tests and screenings for genetic and infectious diseases.",
      },
      {
        name: "Certificate Issuance",
        description:
          "After completing the tests and counseling, a marriage compatibility certificate is issued.",
      },
    ],
  },
];

export default serviceById;
