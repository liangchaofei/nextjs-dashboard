'use server';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices, insertInvoices } from '@/app/lib/data';
import Add from './Add';

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();
  const handleAdd = async (value: string) => {
    'use server';
    await insertInvoices(value);
  };
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Invoices
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="mb-4 flex items-center">
          <Add handleAdd={handleAdd} />
        </div>

        <div className="bg-white px-6">
          {latestInvoices.map((invoice, i) => (
            <div
              key={invoice.id}
              className={clsx(
                'flex flex-row items-center justify-between py-4',
                {
                  'border-t': i !== 0,
                },
              )}
            >
              <div className="flex items-center">
                <Image
                  src={invoice.image_url}
                  alt={`${invoice.name}'s profile picture`}
                  className="mr-4 rounded-full"
                  width={32}
                  height={32}
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold md:text-base">
                    {invoice.name}
                  </p>
                  <p className="hidden text-sm text-gray-500 sm:block">
                    {invoice.email}
                  </p>
                </div>
              </div>
              <p
                className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
              >
                {invoice.amount}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.getElementById('insertButton').addEventListener('click', async () => {
            const nameInput = document.getElementById('nameInput').value;
            if (nameInput.trim() !== '') {
              try {
                await fetch('/api/insertInvoices', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ name: nameInput }),
                });
                // 可以在这里刷新页面或者重新加载数据
                console.log('Inserted invoice:', nameInput);
              } catch (error) {
                console.error('Error inserting invoice:', error);
              }
            }
          });
        `,
        }}
      />
    </div>
  );
}
