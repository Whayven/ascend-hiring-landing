export const ItemSection = (props: {
  title: string;
  items: {
    title: string;
    description: string;
    icon: JSX.Element;
  }[];
}) => {
  const { title, items } = props;
  return (
    <section id='features' className='bg-gray-100 p-12'>
      <div className='container mx-auto'>
        <h2 className='mb-8 text-3xl font-bold'>{title}</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {items.map((item, index) => (
            <div key={index} className='feature text-center'>
              <div className='mx-auto mb-4 inline-block rounded-full bg-blue-100 p-4'>
                {item.icon}
              </div>
              <h3 className='mb-4 text-xl font-bold'>{item.title}</h3>
              <p className='text-lg'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
