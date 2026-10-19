export function TeamMember({ name, role, image, imagePosition = "center 22%" }) {
  return (
    <article className="group relative aspect-[3/4] overflow-hidden bg-primary">
      <img
        src={image}
        alt=""
        loading="lazy"
        decoding="async"
        style={{ objectPosition: imagePosition }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f33] via-[#0b1f33]/10 to-transparent opacity-80" />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">{name}</h3>
        <p className="type-small mt-1 text-accent-soft sm:max-h-0 sm:overflow-hidden sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:max-h-24 sm:group-hover:opacity-100">
          {role}
        </p>
      </div>
    </article>
  );
}
