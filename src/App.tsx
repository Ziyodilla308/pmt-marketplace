import {Toaster} from '@/components/ui/toaster';
import {Toaster as Sonner} from '@/components/ui/sonner';
import {TooltipProvider} from '@/components/ui/tooltip';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import IroningEquipment from './pages/categories/IroningEquipment';
import ComputerizedLaserMachines from './pages/categories/ComputerizedLaserMachines';
import AccessoriesAndSpareParts from './pages/categories/AccessoriesAndSpareParts';
import AutoMachine from './pages/categories/AutoMachine';
import AutomatedDesign from './pages/categories/AutomatedDesign';
import AuxiliaryMachines from './pages/categories/AuxiliaryMachines';
import CuttingMachines from './pages/categories/CuttingMachines';
import ShingLing from './pages/categories/ShingLing';
import {ThemeProvider} from "next-themes";
import ProductDetail from "@/pages/ProductDetail.tsx";

const queryClient = new QueryClient();

const App = () => (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster/>
                <Sonner/>
                <BrowserRouter future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/ru"/>}></Route>
                        <Route path="/:lang" element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path="contact" element={<Contact/>}/>
                            <Route path="categories/ironing_equipment" element={<IroningEquipment/>}/>
                            <Route path="categories/computerized_laser_machines"
                                   element={<ComputerizedLaserMachines/>}/>
                            <Route path="categories/accessories_and_spare_parts" element={<AccessoriesAndSpareParts/>}/>
                            <Route path="categories/auto_machine" element={<AutoMachine/>}/>
                            <Route path="categories/automated_design" element={<AutomatedDesign/>}/>
                            <Route path="categories/auxiliary_machines" element={<AuxiliaryMachines/>}/>
                            <Route path="categories/cutting_machines" element={<CuttingMachines/>}/>
                            <Route path="categories/shing_ling" element={<ShingLing/>}/>
                            <Route
                                path="categories/:category/detail/:id"
                                element={<ProductDetail/>}
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </TooltipProvider>
        </QueryClientProvider>
    </ThemeProvider>

);

export default App;
