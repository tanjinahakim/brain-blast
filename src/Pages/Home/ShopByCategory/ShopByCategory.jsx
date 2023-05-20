import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ShopByCategory = () => {
    return (
        <section className='my-20'>
            <Tabs className="max-w-4xl mx-auto">
                <TabList className="max-w-xl mx-auto">
                <Tab>Math</Tab>
                <Tab>Science</Tab>
                <Tab>Language</Tab>
                </TabList>

                <TabPanel>
                <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </section>
    );
};

export default ShopByCategory;