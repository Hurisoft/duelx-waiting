import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

function ConnectWalletModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: CallableFunction;
}) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-zinc-300 bg-opacity-30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-4xl transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all">
                <button
                  className="ml-auto grid place-content-center rounded-full bg-neutral-600 size-10"
                  onClick={closeModal}
                >
                  <img src="/icons/close.svg" alt="" />
                </button>
                <div className="relative z-50 flex flex-col items-center gap-12 py-40">
                  <img src="/images/airdrop.svg" className="w-60" alt="" />
                  <p className="text-3xl font-medium">
                    Want to be part of our token airdrop?
                  </p>
                  <Link href="/compliance">
                    <button className="rounded-full px-12 py-5 transition gradient-bg hover:opacity-80">
                      Connect Wallet
                    </button>
                  </Link>
                </div>
                <img
                  src="/images/dashboard-slanted.webp"
                  className="absolute right-0 bottom-0 w-3/4"
                  alt=""
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ConnectWalletModal;
