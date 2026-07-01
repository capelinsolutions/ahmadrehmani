import avastin from "@/assets/services/meds/avastin.png";
import lucentis from "@/assets/services/meds/lucentis.png";
import eylea from "@/assets/services/meds/eylea.png";
import eyleaHd from "@/assets/services/meds/eylea-hd.png";
import vabysmo from "@/assets/services/meds/vabysmo.png";
import pavblu from "@/assets/services/meds/pavblu.png";

const meds = [
  { name: "Avastin", img: avastin },
  { name: "Lucentis", img: lucentis },
  { name: "Eylea", img: eylea },
  { name: "Eylea HD", img: eyleaHd },
  { name: "Vabysmo", img: vabysmo },
  { name: "Pavblu", img: pavblu },
];

const AntiVegfMarquee = ({ label = "Anti-VEGF Medications We Offer" }: { label?: string }) => (
  <div className="mt-14">
    <p className="font-body text-xs text-accent font-semibold uppercase tracking-wider text-center mb-5">
      {label}
    </p>
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      {[0, 1].map((dup) => (
        <div
          key={dup}
          className="flex animate-marquee space-x-8 items-center min-w-full shrink-0"
          aria-hidden={dup === 1}
        >
          {meds.map((med) => (
            <div
              key={`${dup}-${med.name}`}
              className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-background rounded-xl shadow-sm border border-border px-6"
            >
              <img
                src={med.img}
                alt={`${med.name} brand logo`}
                loading="lazy"
                className="max-h-12 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default AntiVegfMarquee;
