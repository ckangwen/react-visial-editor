import React, { useState, memo, useRef } from 'react';
import { Input, Col, Collapse, Row, Affix } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import Draggable, { DraggableProps } from './Draggable';
import isEmpty from 'lodash/isEmpty';
import Fuse from 'fuse.js';
import { Dispatch } from 'dva';
import { blocksCategory, AllBlockCategory } from '@/config';
import styles from './style.css';

interface CategoryType {
  dispatch?: Dispatch;
}

function Category(props: CategoryType) {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [allBlockConfigs, setAllBlockConfigs] = useState(blocksCategory);
  const ref = useRef<HTMLDivElement>(null);

  const handleSearch = (searchKey: string) => {};

  return (
    <div className={styles['category-container']} ref={ref}>
      <Affix target={() => ref.current}>
        <Input.Search
          placeholder="search"
          onSearch={value => handleSearch(value)}
          style={{ width: '100%' }}
        />
      </Affix>
      {isEmpty(allBlockConfigs) ? (
        <p style={{ textAlign: 'center' }}>未找到可拖拽的组件</p>
      ) : (
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          activeKey={openKeys}
          style={{ backgroundColor: '#fff' }}
          onChange={(newOpenKeys: string | string[]) =>
            Array.isArray(newOpenKeys) ? setOpenKeys(newOpenKeys) : setOpenKeys([newOpenKeys])
          }
        >
          {Object.keys(allBlockConfigs).map((name: string) => {
            const componentConfig = allBlockConfigs[name as AllBlockCategory];
            return (
              <Collapse.Panel key={name} style={{ border: 0 }} header={name}>
                <Row>
                  {Object.keys(componentConfig).map((tag: string) => {
                    const props: DraggableProps = {
                      dragData: {
                        tag,
                        defaultProps: (componentConfig as any)[tag],
                      },
                    };
                    return (
                      <Col span={24} key={tag}>
                        <Draggable {...props} />
                      </Col>
                    );
                  })}
                </Row>
              </Collapse.Panel>
            );
          })}
        </Collapse>
      )}
    </div>
  );
}

export default memo(Category);
