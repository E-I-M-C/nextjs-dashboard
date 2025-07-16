//import Table from '@/app/ui/customers/table';
//import { Suspense } from 'react';
//import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {
  //const customers = fetchCustomers();
  //console.log(await customers);

  return (<>
    <p>Customers Page</p>
    {/* <Suspense>
      <Table customers={customers} />
    </Suspense> */}
  </>);
}