<?php
    class MoneymanController extends Aclfilter{
        
        public $layout='//layouts/backyard';//定义布局以便加载kindeditor文本编辑器的css与js
        
        
        /*
            会员充值管理-充值列表
        */
        public function actionMoneylist()
        {
            parent::acl();
             /*
            ***查询出用户充值交易信息
            */
            $criteria = new CDbCriteria;
            $criteria->order ="addtime desc";
        
            //分页开始
            $total = Kcborder::model()->count($criteria);
            $pages = new CPagination($total);
            $pages->pageSize=10;//分页大小
            $pages->applyLimit($criteria);
            
            $proreg = Kcborder::model()->findAll($criteria);
            //分页结束
            $this->renderPartial('moneylist',array(
                'proInfo' => $proreg,
                'pages' => $pages
            ));
        }
        
        /*
            ***提现审核列表
        */
        public function actionTxlist()
        {
            parent::acl();
            
            // 改变提现状态
            if(isset($_GET['txid']) && $_GET['txid']<>0 && isset($_GET['txStatus']) && $_GET['txStatus']!="")
            {   
                $txInfo=Recordlist::model()->findByPk($_GET['txid']);
                $txInfo->txStatus=$_GET['txStatus'];//改变提现状态
                $txInfo->save();
                $this->redirect(Yii::app()->request->urlReferrer);
                Yii::app()->end();
            }
            //查询用户提现记录
            $criteria = new CDbCriteria;
            $criteria->condition='catalog=8';
            $criteria->order ="time desc";
        
            //分页开始
            $total = Recordlist::model()->count($criteria);
            $pages = new CPagination($total);
            $pages->pageSize=8;//分页大小
            $pages->applyLimit($criteria);
            
            $proreg = Recordlist::model()->findAll($criteria);
            //分页结束
            $this->renderPartial('txlist',array(
                'proInfo' => $proreg,
                'pages' => $pages
            ));
        }
        
        public function actionUserDetail()
        {
            parent::acl();
            //查询用户提现记录
            $criteria = new CDbCriteria;
            $criteria->condition='catalog in(1,5,6) and userid='.$_GET['uid'];
            $criteria->order ="catalog asc,time desc";
        
            //分页开始
            $total = Recordlist::model()->count($criteria);
            $pages = new CPagination($total);
            $pages->pageSize=20;//分页大小
            $pages->applyLimit($criteria);
            
            $proreg = Recordlist::model()->findAll($criteria);
            //分页结束
            $this->renderPartial('userDetail',array(
                'proInfo' => $proreg,
                'pages' => $pages
            ));
        }
    }
?>