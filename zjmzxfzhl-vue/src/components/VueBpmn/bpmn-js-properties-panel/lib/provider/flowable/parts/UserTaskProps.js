'use strict';

var is = require('bpmn-js/lib/util/ModelUtil').is,
    entryFactory = require('../../../factory/EntryFactory');

module.exports = function(group, element, translate) {
  if (is(element, 'flowable:Assignable')) {

      // Category
      group.entries.push(entryFactory.textField({
          id : 'category',
          label : translate('Category'),
          modelProperty : 'category',
      }));

    // Assignee
    group.entries.push(entryFactory.textField({
      id : 'assignee',
      label : translate('Assignee'),
      modelProperty : 'assignee',
    }));

    // group.entries.push(entryFactory.textField({
    //   id : 'assignee',
    //   label : translate('Assignee'),
    //   modelProperty : 'assignee',
    //   selectOptions:
    //     function(element) {
    //       return [
    //         {name: '张三', value: 'zhangsan'},
    //         {name: '李四', value: 'lisi'}
    //       ]
    //     },
    // }))

    // Candidate Users
    group.entries.push(entryFactory.textField({
      id : 'candidateUsers',
      label : translate('Candidate Users'),
      modelProperty : 'candidateUsers'
    }));

    // Candidate Groups
    group.entries.push(entryFactory.textField({
      id : 'candidateGroups',
      label : translate('Candidate Groups'),
      modelProperty : 'candidateGroups'
    }));

    // Due Date
    group.entries.push(entryFactory.textField({
      id : 'dueDate',
      description : translate('The due date as an EL expression (e.g. ${someDate} or an ISO date (e.g. 2015-06-26T09:54:00)'),
      label : translate('Due Date'),
      modelProperty : 'dueDate'
    }));

    // FollowUp Date
    group.entries.push(entryFactory.textField({
      id : 'followUpDate',
      description : translate('The follow up date as an EL expression (e.g. ${someDate} or an ' +
                    'ISO date (e.g. 2015-06-26T09:54:00)'),
      label : translate('Follow Up Date'),
      modelProperty : 'followUpDate'
    }));

    // priority 优先级
    group.entries.push(entryFactory.textField({
      id : 'priority',
      label : translate('Priority'),
      modelProperty : 'priority'
    }));
  }
};
