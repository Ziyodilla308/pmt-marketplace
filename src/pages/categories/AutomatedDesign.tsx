import {pmtProducts} from "@/data/mock/pmtProducts.ts";
import CategoryFilters from "@/components/elements/CategoryFilters.tsx";
import {useCategoryFilter} from "@/hooks/useCategoryFilter.ts";
import ProductsGrid from "@/components/elements/Products.Grid.tsx";
import {useTranslation} from "react-i18next";

const AutomatedDesign = () => {
  const { t } = useTranslation();

  const {
    filteredProducts,
    setSelectedType,
      selectedType
  } = useCategoryFilter(pmtProducts, "automated_design");

  return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{t("automatedDesign")}</h1>
            <p className="text-muted-foreground">
              {t("professionalAutomatedDesignText")}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <aside className="w-full md:w-72 space-y-6">
              <CategoryFilters
                  category="automated_design"
                  selectedFilter={selectedType}
                  onFilterChange={(t) => setSelectedType(t)}
              />
            </aside>

            <ProductsGrid products={filteredProducts}/>
          </div>
        </div>
      </div>
  );
};

export default AutomatedDesign;
