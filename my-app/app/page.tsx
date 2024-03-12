import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandInput,
 
} from "@/components/ui/command"

import Formulary from "./form"
import { NavigationMenuDemo } from "./nav-menu"

export default function Home() {
  
  return ( 
    <main className="w-3xl rounded-[30px] p-8 border-8 border-gray-50  w-2/3 m-auto mt-12 bg-white">

<Table>
  <TableHeader>
  <TableCaption className="inline-flex text-start ml-4 text-black text-2xl font-bold mb-6" >Product Sales</TableCaption>
<div className="inline-flex gap-14">
  <div><Command className=" border rounded-[12px] ">
  <CommandInput  placeholder="Search user, name, email..." /></Command></div>
  <div className=""><NavigationMenuDemo></NavigationMenuDemo></div>
  <div><Button className=""> Search</Button></div>
</div>

    <TableRow>
      <TableHead>Product Name</TableHead>
      <TableHead className="text-center">Sales</TableHead>
      <TableHead className="text-center">Record Point</TableHead>
      <TableHead className="text-center">Stack</TableHead>
      <TableHead className="text-center">Amount</TableHead>
      <TableHead className="text-center">Stock Status</TableHead>
      
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Adidas Football Shoes</TableCell>
      <TableCell>256</TableCell>
      <TableCell className="text-center">06</TableCell>
      <TableCell className="text-center">445</TableCell>
      <TableCell className="text-center">$270.02</TableCell>
      <TableCell className="text-center">In Stock</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">Puma T-shirt white</TableCell>
      <TableCell>520</TableCell>
      <TableCell className="text-center">03</TableCell>
      <TableCell className="text-center">258</TableCell>
      <TableCell className="text-center">$256.02</TableCell>
      <TableCell className="text-center">In stock</TableCell>
    </TableRow>
    <TableRow>
    <TableCell className="font-medium">Nike Air Jordan 2023</TableCell>
      <TableCell>325</TableCell>
      <TableCell className="text-center">04</TableCell>
      <TableCell className="text-center">369</TableCell>
      <TableCell className="text-center">$450,26</TableCell>
      <TableCell className="text-center">Out of stuck</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">Nike T-shirt - Black</TableCell>
      <TableCell>458</TableCell>
      <TableCell className="text-center">08</TableCell>
      <TableCell className="text-center">258</TableCell>
      <TableCell className="text-center">$568,45</TableCell>
      <TableCell className="text-center">In Stock</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">Puma Futsal Shoes</TableCell>
      <TableCell>324</TableCell>
      <TableCell className="text-center">06</TableCell>
      <TableCell className="text-center">169</TableCell>
      <TableCell className="text-center">$478,25</TableCell>
      <TableCell className="text-center">Out of stuck</TableCell>
    </TableRow>
    
  </TableBody>
</Table>
<div>
<Dialog>
      <DialogTrigger asChild>
        <Button  className="bg-black text-white" variant="outline">Preencha aqui seu formulário</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <Formulary> 
          </Formulary>
        </DialogHeader>
      </DialogContent>
</Dialog>
</div>

</main>
);
  };

