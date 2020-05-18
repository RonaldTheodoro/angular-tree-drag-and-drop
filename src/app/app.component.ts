import { Component } from '@angular/core';
import { ITreeState, ITreeOptions, TREE_ACTIONS, KEYS, IActionMapping, TreeModel, TreeNode } from 'angular-tree-component';
import { v4 } from 'uuid';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    state: ITreeState = {
        expandedNodeIds: {
            1: true,
            2: true
        },
        hiddenNodeIds: {},
        activeNodeIds: {}
    };

    options: ITreeOptions = {
        allowDrag: (node) => true,
        allowDrop: (node) => true,
        getNodeClone: (node) => ({
            ...node.data,
            id: v4(),
            name: `copy of ${node.data.name}`
        }),
        actionMapping: {
            mouse: {
                dblClick: (tree: TreeModel, node: TreeNode, $event: any) => {
                    if (node.hasChildren) {
                        TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
                    }
                }
            }
        }
    };

    nodes01 = [
        {
            id: 1,
            name: 'root1',
            children: [
                { name: 'child1' },
                { name: 'child2' }
            ]
        },
        {
            name: 'root2',
            id: 2,
            children: [
                { name: 'child2.1', children: [] },
                {
                    name: 'child2.2', children: [
                        { name: 'grandchild2.2.1' }
                    ]
                }
            ]
        },
        { name: 'root3' },
        { name: 'root4', children: [] },
        { name: 'root5', children: null }
    ];


    nodes02 = [
        {
            id: 1,
            name: 'root1',
            children: [
                { name: 'child1' },
                { name: 'child2' }
            ]
        },
        {
            name: 'root2',
            id: 2,
            children: [
                { name: 'child2.1', children: [] },
                {
                    name: 'child2.2', children: [
                        { name: 'grandchild2.2.1' }
                    ]
                }
            ]
        },
        { name: 'root3' },
        { name: 'root4', children: [] },
        { name: 'root5', children: null }
    ];
}
