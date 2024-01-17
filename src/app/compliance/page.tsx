import React from "react";
import Container from "@/components/Container";
import Link from "next/link";

function CompliancePage() {
  return (
    <main className="mx-auto max-w-prose px-4 md:px-0">
      <h3 className="text-3xl font-semibold">
        Challenge Pool Compliance Document
      </h3>

      <p className="mt-12 text-neutral-400">
        Introduction: [Your Company Name] is committed to maintaining a secure
        and legally compliant platform for users to participate in challenges.
        This document outlines our dedication to regulatory compliance,
        including but not limited to Know Your Customer (KYC) and Anti-Money
        Laundering (AML) regulations.
      </p>

      <h4 className="mt-10 mb-2 text-xl font-semibold">
        Compliance Objectives:
      </h4>
      <ol className="ml-4 list-decimal leading-loose text-neutral-400">
        <li>
          To ensure that all users comply with relevant legal and regulatory
          requirements.
        </li>
        <li>
          To prevent illegal activities such as fraud, money laundering, and
          other financial crimes on our platform.
        </li>
        <li>
          To protect the privacy and security of user information and compliance
          documents.
        </li>
      </ol>

      <h4 className="mt-10 mb-2 text-xl font-semibold">Compliance Measures:</h4>
      <p className="mt-6 text-lg">1. Know Your Customer (KYC) Checks:</p>
      <ol className="ml-4 list-disc leading-loose text-neutral-400">
        <li>
          Users are required to submit valid identification documents and proof
          of address.
        </li>
        <li>
          [Your Company Name] verifies the authenticity of these documents
          before allowing users to participate in high-stakes challenges.
        </li>
      </ol>

      <p className="mt-6 text-lg">2. Anti-Money Laundering (AML) Compliance:</p>
      <ol className="ml-4 list-disc leading-loose text-neutral-400">
        <li>
          [Your Company Name] monitors financial transactions to detect and
          prevent any suspicious activities.
        </li>
        <li>
          Transactions exceeding specified thresholds may be subject to
          additional scrutiny.
        </li>
      </ol>

      <p className="mt-6 text-lg">3. Data Protection:</p>
      <ol className="ml-4 list-disc leading-loose text-neutral-400">
        <li>
          [Your Company Name] complies with data protection laws and ensures the
          secure handling of user data and compliance documents.
        </li>
        <li>User data is never shared with third parties without consent.</li>
      </ol>

      <p className="mt-6 text-lg">4. Compliance Audits:</p>
      <ol className="ml-4 list-disc leading-loose text-neutral-400">
        <li>
          Periodic audits are conducted to ensure that our platform remains in
          compliance with legal and regulatory requirements.
        </li>
      </ol>

      <h4 className="mt-10 mb-2 text-xl font-semibold">User Education:</h4>
      <ol className="ml-4 list-decimal leading-loose text-neutral-400">
        <li>
          [Your Company Name] provides educational resources to help users
          understand the importance of compliance and the impact it has on the
          security and integrity of the platform.
        </li>
      </ol>

      <h4 className="mt-10 mb-2 text-xl font-semibold">Legal Disclaimers:</h4>
      <ol className="ml-4 list-decimal leading-loose text-neutral-400">
        <li>
          Users are informed about the purpose of collecting compliance
          documents and how this information will be used. Reporting to
          Regulatory Authorities:
        </li>
        <li>
          If required by law, [Your Company Name] prepares and submits reports
          to regulatory authorities regarding user compliance.
        </li>
      </ol>

      <h4 className="mt-10 mb-2 text-xl font-semibold">Conclusion:</h4>
      <p className="leading-loose text-neutral-400">
        [Your Company Name] is dedicated to maintaining a legally compliant
        platform that prioritizes the security and privacy of its users. Users
        are encouraged to reach out to our customer support team for any
        questions or concerns related to compliance.
      </p>

      <h4 className="mt-10 mb-2 text-xl font-semibold">Disclaimer:</h4>
      <p className="leading-loose text-neutral-400">
        This compliance document is intended as a general template. [Your
        Company Name] should consult with legal professionals to ensure that
        your platform complies with all relevant local and international laws
        and regulations.{" "}
      </p>

      <Link href="/compliance/form">
        <button className="mt-12 flex w-full items-center justify-center gap-6 rounded-full py-5 transition gradient-bg hover:opacity-80">
          Proceed
          <div className="size-9 rounded-full bg-gradient-to-br from-[#A03A89] via-[#EF2B3D] to-[#FB7A46] grid place-content-center">
            <img src="/icons/arrow-right.svg" alt="" />
          </div>
        </button>
      </Link>
    </main>
  );
}

export default CompliancePage;
