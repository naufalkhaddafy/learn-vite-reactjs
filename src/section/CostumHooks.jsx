import Card from '../components/Card';
import Button from '../components/Button';
import useSurat from '../hooks/useSurat';
const CostumHooks = () => {
  const surat = useSurat();
  return (
    <div className={'w-full py-5'}>
      <div className='text-center'>
        <span className={'text-sm mb-2'}>Costum Hooks</span>
        <h2 className={'text-xl text-gray-400'}>Get and Update Data from API</h2>
      </div>
      <div className={'w-full p-4 flex justify-center'}>
        <div className='w-full max-w-lg'>
          <Card>
            <Card.Title>My Quran</Card.Title>
            <Card.Body>
              <div
                className={
                  'h-96 overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-600 scrollbar-medium'
                }>
                {surat &&
                  surat.map((surat, key) => (
                    <div key={key} className={'rounded border-b p-2 border-slate-600 my-2'}>
                      <p>
                        {surat.nomor}. {surat.namaLatin} ({surat.nama})
                      </p>
                    </div>
                  ))}
              </div>
            </Card.Body>
            <Card.Footer>{/* <Button>Joke </Button> */}</Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default CostumHooks;
