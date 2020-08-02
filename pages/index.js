import Layout from '../components/layout'
import { useForm, useCMS, usePlugin } from 'tinacms';
import data from '../data/data.json';
import { InlineForm, InlineBlocks } from 'react-tinacms-inline';
import { paragraphBlock } from '../components/paragraph';
import { featureListBlock } from '../components/featureList';
import { imagesBlock } from '../components/images';
import { heroBlock } from '../components/hero';

export default function Index() {
  const cms = useCMS();
  const formConfig = {
    id: '../data/data.json',
    initialValues: data,
    onSubmit() {
      cms.alerts.success('Saved!');
    },
  };
  const [, form] = useForm(formConfig);

  return (
    <Layout>
      <div className='home'>
        <InlineForm form={form} initialStatus='active'>
          <InlineBlocks name='blocks' blocks={HOME_BLOCKS} />
        </InlineForm>
      </div>
    </Layout>
  );
}

const HOME_BLOCKS = {
  paragraph: paragraphBlock,
  features: featureListBlock,
  images: imagesBlock,
  hero: heroBlock,
};