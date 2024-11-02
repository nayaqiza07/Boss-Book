import { Search } from "../Search";
import { Filter } from "../FIlter";
import { Section2 } from "../Section/Section2";
import { Section3 } from "../Section/Section3";
import { Section4 } from "../Section/Section4";

export const Content = () => {
  return (
    <div className="flex-1 px-9 py-6">
      {/* Section 1 Start */}
      <section className="flex flex-col md:flex-row justify-between">
        <Search />
        <Filter />
      </section>
      {/* Section 1 End */}

      {/* Section 2 Start */}
      <Section2 />
      {/* Section 2 End */}

      {/* Section 3 Start */}
      <Section3 />
      {/* Section 3 End */}

      {/* Section 4 Start */}
      <Section4 />
      {/* Section 4 End */}
    </div>
  );
};
