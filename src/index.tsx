import React from 'react';
import { Layout, Tabs } from 'antd'
// import 'antd/dist/antd.min.css'
import ComponentSetting from '@/modules/ComponentSetting'
import DomTree from '@/modules/DomTree'
import ToolBar from '@/modules/ToolBar'
import styles from './index.css'
import './react-contextmenu.css'
import { RenderCanvas } from '@/modules/RenderCanvas';
import PropPanel from '@/modules/PropsPanel';
const { TabPane } = Tabs;

export default function() {
  return (
    <Layout>
      <Layout.Header style={{ padding: 0, background: '#000' }}>
       <ToolBar/>
      </Layout.Header>
      <Layout>
        <Layout.Sider style={{ height: 'calc(100vh - 64px)' }}>
         <ComponentSetting />
        </Layout.Sider>
        <Layout.Content>
          <section className={styles['canvas-container']}>
            <RenderCanvas />
          </section>
        </Layout.Content>
        <Layout.Sider style={{ background: '#fff', height: 'calc(100vh - 64px)' }}>
         <Tabs defaultActiveKey="1" style={{ height: '100%' }}>
           <TabPane tab="DOM树" key="1" style={{ height: '100%' }}>
             <DomTree />
           </TabPane>
           <TabPane tab="组件属性" key="2">
             <PropPanel/>
           </TabPane>
           <TabPane tab="组件样式" key="3">
             组件样式
           </TabPane>
         </Tabs>
        </Layout.Sider>
      </Layout>
    </Layout>
  );
}
